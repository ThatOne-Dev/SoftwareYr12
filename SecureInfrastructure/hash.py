import hashlib

# Data to hash
text = "hello world"

# Create a SHA-256 hash object
hash_object = hashlib.sha256(text.encode())

hex_result = hash_object.hexdigest()

print("Original text:", text)
print("SHA-256 Hash:", hex_result)