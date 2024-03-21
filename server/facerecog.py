import sys
import os
import cv2
import face_recognition
import numpy as np
import base64

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

test_images_folder = 'facestorage'
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
