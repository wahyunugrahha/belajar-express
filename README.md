# Belajar Express.js - CRUD API

Repositori ini berisi proyek belajar Express.js dengan implementasi dasar RESTful API untuk entitas **User**.

## 🚀 Fitur

* CRUD (Create, Read, Update, Delete) untuk User
* Middleware untuk logging
* Middleware untuk API Key (pengaman akses endpoint)
* Struktur folder yang rapi (MVC pattern)
* Koneksi ke MongoDB menggunakan Mongoose

## 📁 Struktur Folder

```
belajar-express-js/
├── controller/          # Logika bisnis / handler route
│   └── usersController.js
├── middleware/          # Middleware kustom (API Key, Logging)
│   └── checkApiKey.js
├── models/              # Model Mongoose
│   └── User.js
├── routes/              # Routing API
│   └── users.js
├── .env                 # Variabel lingkungan (seperti URI MongoDB)
├── app.js               # Entry point utama
├── package.json         # Info proyek & dependensi
```

## 🔧 Instalasi

1. Clone repositori ini

```bash
git clone https://github.com/username/belajar-express-js.git
cd belajar-express-js
```

2. Install dependency

```bash
npm install
```

3. Tambahkan file `.env`

```
MONGO_URI=your_mongodb_connection_string
```

4. Jalankan server

```bash
node app.js
```

## 🛠 Endpoint API

### GET /users

Mendapatkan semua user (memerlukan API Key di header `x-api-key`)

### POST /users

Menambahkan user baru

```json
{
  "name": "Nama User",
  "email": "email@example.com"
}
```

### GET /users/\:id

Mendapatkan data user berdasarkan ID

### PUT /users/\:id

Mengubah data user berdasarkan ID

### DELETE /users/\:id

Menghapus user berdasarkan ID

## 🔐 API Key

Semua endpoint `/users` memerlukan API key:

```http
x-api-key: secret123
```

## 📌 Catatan

* Belum menggunakan autentikasi JWT
* Data disimpan di MongoDB menggunakan Mongoose

Selamat belajar Express.js! 🚀
