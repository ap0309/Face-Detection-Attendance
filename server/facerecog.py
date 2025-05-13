# print("hi")
import sys
import os
import cv2
import face_recognition
import numpy as np
import base64
import mysql.connector as sql

known_image_data = sys.stdin.read().strip()

# Extract base64-encoded image data
encoded_data = known_image_data.split(',')[1]

# Decode base64 string into bytes
image_bytes = base64.b64decode(encoded_data)

# Convert the image bytes to a numpy array
image_array = np.frombuffer(image_bytes, dtype=np.uint8)

# Decode the image array into an OpenCV image
known_image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

if known_image is None:
    print("Error: Failed to load known image")
    sys.exit(1)

# Convert to RGB (face_recognition uses RGB images)
known_image_rgb = cv2.cvtColor(known_image, cv2.COLOR_BGR2RGB)

known_encoding = None
try:
    known_encoding = face_recognition.face_encodings(known_image_rgb)[0]
except IndexError:
    print("Error: No face detected in the known image")
    sys.exit(1)

test_images_folder = "D:\\FINAL-FACE\\Face-Detection-Attendance-main\\server\\facestorage"
flag = False
ename = ''

for filename in os.listdir(test_images_folder):
    if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png'):
        test_image_path = os.path.join(test_images_folder, filename)
        test_image = face_recognition.load_image_file(test_image_path)

        # Convert to RGB (face_recognition uses RGB images)
        test_image_rgb = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)

        try:
            test_encoding = face_recognition.face_encodings(test_image_rgb)[0]
        except IndexError:
            continue  # Skip images with no detected faces

        # Calculate the Euclidean distance between face encodings
        distances = face_recognition.face_distance([known_encoding], test_encoding)

        # Set a threshold for considering the faces as a match
        threshold = 0.4

        # Check if the distance is below the threshold
        if distances[0] < threshold:
            flag = True
            ename = filename[:-4]  # Remove the file extension
            break  # Stop iteration if a match is found

print(ename)
print(flag)

    

import mysql.connector as sql

data = sys.stdin.read().strip()

# Connect to MySQL database
def connect_to_database():
    try:
        
        connection = sql.connect(
            host='localhost',    # Specify the hostname or IP address of your MySQL server
            user='root',         # Specify the MySQL username
            password='ap0309',  # Specify the password for the MySQL user
            database='face'     # Specify the name of the MySQL database
        )
        if connection.is_connected():
            print("Connected to MySQL database")
            return connection
    except sql.Error as e:
        print("Error connecting to database:", e.msg)  # Print specific error message
        return None

# Call the connect_to_database function
connection = connect_to_database()

# from datetime import date, datetime, timedelta
# import mysql.connector as sql

# def update_attendance(ename, flag, connection):
#     try:
#         cursor = connection.cursor()
        
#         # Retrieve the Eid and employee name from the employee table based on the employee name (ename)
#         cursor.execute("SELECT Eid, employee_name FROM employee WHERE employee_name = %s", (ename,))
#         result = cursor.fetchone()
#         if result:
#             Eid, employee_name = result
#         else:
#             print("Error: Employee with name", ename, "not found")
#             return

#         current_date = date.today()  # Get the system's date
#         current_time = datetime.now().time().strftime('%H:%M:%S')  # Get the system's current time

#         if flag:
#             # Check if there is already an entry for this employee within the last 5 minutes
#             five_minutes_ago = datetime.now() - timedelta(minutes=5)
#             cursor.execute("SELECT * FROM attendance WHERE Eid = %s AND Date = %s AND In_time >= %s", (Eid, current_date, five_minutes_ago.time().strftime('%H:%M:%S')))
#             existing_entry = cursor.fetchone()
#             if existing_entry:
#                 print("Error: Entry for employee", employee_name, "within the last 5 minutes already exists.")
#                 return

#             # If no existing entry within 5 minutes, insert the new entry
#             cursor.execute("INSERT INTO attendance (Eid, employee_name, Date, In_time) VALUES (%s, %s, %s, %s)", (Eid, employee_name, current_date, current_time))
#         else:
#             cursor.execute("UPDATE attendance SET Out_time = NULL WHERE Eid = %s AND Date = %s", (Eid, current_date))
#         connection.commit()
#         cursor.close()
        
#         if flag:
#             print("Attendance updated - Employee ID:", Eid, "Employee Name:", employee_name, "Date:", current_date, "In Time:", current_time)
#         else:
#             print("Attendance updated - Employee ID:", Eid, "Employee Name:", employee_name, "Date:", current_date)
            
#     except sql.Error as e:
#         print("SQL Error:", e)
#     except Exception as e:
#         print("Error updating attendance:", e)

from datetime import date, datetime, timedelta
import mysql.connector as sql

def update_attendance(ename, flag, connection):
    try:
        cursor = connection.cursor()
        
        # Retrieve the Eid and employee name from the employee table based on the employee name (ename)
        cursor.execute("SELECT Eid, employee_name FROM employee WHERE employee_name = %s", (ename))
        result = cursor.fetchone()
        if result:
            Eid, employee_name = result
        else:
            print("Error: Employee with name", ename, "not found")
            return

        current_date = date.today()  # Get the system's date
        current_time = datetime.now().time().strftime('%H:%M:%S')  # Get the system's current time

        # if flag:
            # Check if there is already an entry for this employee within the last 5 minutes
        five_minutes_ago = datetime.now() - timedelta(minutes=5)
        cursor.execute("SELECT * FROM attendance WHERE Eid = %s AND Date = %s AND In_time >= %s", (Eid, current_date, five_minutes_ago.time().strftime('%H:%M:%S')))
        existing_entry = cursor.fetchone()

        # Check if there is an entry for this employee on the current date
        cursor.execute("SELECT * FROM attendance WHERE Eid = %s AND Date = %s", (Eid, current_date))
        existing_date_entry = cursor.fetchone()

        if existing_entry : # and existing_date_entry:
            print("Error: Entry for employee", employee_name, "within the last 5 minutes already exists for today.")
            return
        
        else :
            sql_query = "UPDATE attendance SET Out_time = %s WHERE Eid = %s AND Date = %s"
            query_values = (current_time, Eid, current_date)

            print("Generated SQL Query:", sql_query)
            print("Query Values:", query_values)

            cursor.execute(sql_query, query_values)
            return              

            # If no existing entry within 5 minutes or for the current date, insert the new entry
        cursor.execute("INSERT INTO attendance (Eid, employee_name, Date, In_time) VALUES (%s, %s, %s, %s)", (Eid, employee_name, current_date, current_time))
        # else:
            # cursor.execute("UPDATE attendance SET Out_time = NULL WHERE Eid = %s AND Date = %s", (Eid, current_date))
        connection.commit()
        cursor.close()
        
        if flag:
            print("Attendance updated - Employee ID:", Eid, "Employee Name:", employee_name, "Date:", current_date, "In Time:", current_time)
        else:
            print("Attendance updated - Employee ID:", Eid, "Employee Name:", employee_name, "Date:", current_date)
            
    except sql.Error as e:
        print("SQL Error:", e)
    except Exception as e:
        print("Error updating attendance:", e)

update_attendance(ename, flag, connection)

# Close the database connection
connection.close()