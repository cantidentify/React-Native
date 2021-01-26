# React-Native

อัปโหลดไฟล์ใน Screen <br>
ส่วน dependency ดูใน package.json

# Install
 
 1. เมื่อ pull โปรเจคแล้ว ให้พิมพ์ npm install  เพื่อ install dependencie ข้างใน package.json ทั้งหมด
 2. แน่ใจว่ามี Folder Android อยู่ข้างใน ถ้าไม่มีให้ npm install --save expo แล้วพิมพ์ expo eject และ พิมพ์ชื่อ android package เช่น com.test


 # Common Mistake

ใน /android/build.gradle  ไม่ได้ 
 maven { url("$rootDir/../node_modules/expo-camera/android/maven") }
 
