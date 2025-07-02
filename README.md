# Tentang
Proyek website SPA yang, menggunakan [Vue 3](https://github.com/vuejs/core) sebagai front-end Javascript dan [UnoCss](https://github.com/unocss/unocss).

## Setup
Untuk menginstall semua dependencies, gunakan pnpm, dengan menjalankan fungsi:

```bash
pnpm i
```

## Env
Untuk men-setup variabel `.env`  (jika belum ada), rename file bernama `.env.example` menjadi `.env` masukkan data berikut ke dalamnya, dan isi valuenya. `.env` digunakan untuk men-deploy, sedangkan `.env.dev` untuk pengembangan.

```bash
PORT=""
BASE_URL=""
VITE_API_BASE_URL=""
VITE_ODATA_API_BASE_URL=""
VITE_HTTPS="false"
```

## Vue
Penulisan kode sepenuhnya dilakukan dengan composition api milik Vue 3, dengan membungkus script bersama setup `<script setup>`, cek lebih jelasnya tantang [script setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup).

Vue digunakan bersama Typescript, setiap data memiliki definisi type masing-masing, disarankan untuk memberikan definisi tipe jika ingin membuat data baru.

## Folder
<ol>
    <li>
        <a href="../main/public">/public</a>
         <ul>
            <li>Untuk file-file yang sifatya publik dan dapat dibaca tanpa tercompile dalam proses build</li>
        </ul>
    </li>
    <li>
        <a href="../main/src/assets">/src/assets</a>
         <ul>
            <li>Digunakan untuk menyimpan file yang dapat tercompile daat proses build</li>
        </ul>
    </li>
    <li>
        <a href="../main/src/components">/src/components</a>
         <ul>
            <li>Digunakan untuk menyimpan komponen</li>
        </ul>
    </li>
    <li>
        <a href="../main/src/composables">/src/composables</a>
         <ul>
            <li>
            Digunakan untuk menyimpan menyimpan logic yang dapat dipakai berulang-ulang, seperti helper
            </li>
        </ul>
    </li>
    <li>
        <a href="../main/src/datas">/src/datas</a>
         <ul>
            <li>
                Digunakan untuk menyimpan data statis yang dapat dipanggil di berbagai tempat
            </li>
        </ul>
    </li>
    <li>
        <a href="../main/src/pages">/src/pages</a>
         <ul>
            <li>Digunakan untuk menyimpan halaman berdasarkan nama folder dan filenya</li>
        </ul>
    </li>
    <li>
        <a href="../main/src/stores">/src/stores</a>
         <ul>
            <li>Digunakan untuk menyimpan logic hampir semua file, yang ingin dipanggil secara global</li>
        </ul>
    </li>
    <li>
        <a href="../main/src/types">/src/types</a>
         <ul>
            <li>Tempat menyimpan file Typescript, untuk digunakan di berbagai tempat</li>
        </ul>
    </li>
</ol>

## Ekstensi Kode Editor
Pengembang merekomendasikan menggunakan ektensi berikut pada masa develpment. Dapat dicari dan diinstall langsung menggunakan kode editor [VSCode](https://code.visualstudio.com)
<ol>
    <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">
            Vue Language Features (Volar)
        </a>
         <ul>
            <li>
                Ekstensi pembantu khusus untuk Vue JS
            </li>
        </ul>
    </li>
   <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">
           TypeScript Vue Plugin (Volar)
        </a>
         <ul>
            <li>
               Sama seperti yang di atas, tapi ditambah dengan Typescript
            </li>
        </ul>
    </li>
     <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next">
          JavaScript and TypeScript Nightly
        </a>
         <ul>
            <li>
                Harus menggunakan ini, karena pada dasarnya proyek ditulis menggunakan Typescript
            </li>
        </ul>
    </li>
     <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss">
          UnoCSS
        </a>
         <ul>
            <li>
               Untuk melihat preview code css dari UnoCss
            </li>
        </ul>
    </li>
     <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify">
         Iconify IntelliSense
        </a>
         <ul>
            <li>
               Untuk melihat preview ikon yang tersedia dari UnoCss
            </li>
        </ul>
    </li>
    
</ol>

## Federasi
Federasi adalah konsep menggabungkan dua website berbeda menjadi satu. Terdapat dua tipe federasi yaitu `Host` yang berfungsi sebagai kerangka website utama, dan `Remote` yang dapat diinject ke dalam `Host`. Misal dalam `Host` dapat memiliki banyak `Remote`. Repo ini sendiri merupakan starter minimal untuk `Remote`.

Untuk membuat halaman federasi `Remote` pada repo ini, cukup membuat routing pada halaman  [/src/pages](../main/src/pages)

Misal pada `Remote` ini kita membuat banyak halaman:
 1. Page `contoh.vue` -> `/contoh`
 2. Page `contoh/[unit].vue` -> `/contoh/88`

Terdapat kondisi khusus, jika url `/contoh/88` memiliki halaman custom lain seperti `/contoh/catatan` (yang setingkat dan bukan routing dinamis), maka harus ditambahkan `_` di ujung file ditulis:
 1. Page `contoh/catatan_.vue` -> `/contoh/catatan_`
 2. Page `contoh/catatan_/[unit_unit].vue` -> `/contoh/catatan_/77`
 3. Page `contoh/catatan_/lagi_.vue` -> `/contoh/catatan_/new_`

List diatas dapat dibaca: Jika kita membuat file `contoh.vue` maka akan menjadi halaman federasi `/contoh`, yang dapat diinject ke dalam `Host`. Perlu diperhatikan, terdapat banyak `Remote` tapi url federasi yang dihasilkan harus unik untuk setiap `Remote`. Misal jika `Remote` 1 sudah mendefinisikan url `/contoh` maka, `Remote` 2 tidak bisa mendefinisikan url yang sama.
