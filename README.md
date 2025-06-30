# Tantang
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

Untuk mendefinisikan halaman mana saja yang akan diinject ke dalam `Host`, kita dapat membuat file vue di folder [/src/components/Federation](../main/src/components/Federation)

Terdapat 4 pattern remote yang bisa digunakan:
 1. Komponen `Contoh.vue` -> `/contoh`
 2. Komponen `ContohUnit.vue` -> `/contoh/88`

List diatas dapat dibaca: komponen yang dibuat dalam folder [/src/components/Federation](../main/src/components/Federation) otomatis akan manjadi url pada contoh di sampingnya pada proses Build. Prefix `Unit` di akhir artinya menandakan halaman dinamis yang bisa diisi apa saja, misal ID.

Terdapat kondisi khusus, jika url `/contoh/88` memiliki halaman custom lain seperti `/contoh/catatan` (bukan url dinamis), maka ditulis:
 1. Komponen `Contoh-Catatan-.vue` -> `/contoh/catatan`
 2. Komponen `Contoh-Catatan-Unit.vue` -> `/contoh/catatan/88`
 3. Komponen `Contoh-Catatan-Lagi-.vue` -> `/contoh/catatan/lagi`

### Proses Development Federasi
Untuk menyesuaikan route halaman, proses development disarankan menginject juga komponen federasi pada folder [/src/pages](../main/src/pages).

Jika menyesuaikan dengan pattern federasi sebelumnya file yang dapat dibuat dibuat seperti:
 1. Page `contoh.vue` -> `/contoh`
 2. Page `contoh/[unit].vue` -> `/contoh/88`
 3. Page `contoh/-catatan-.vue` -> `/contoh/-catatan-`
 4. Page `contoh/-catatan-/[unit_unit].vue` -> `/contoh/-catatan-/77`
 5. Page `contoh/-catatan-/-lagi-.vue` -> `/contoh/-catatan-/-lagi-`

Penulisan pages juga dapat menggabungkan folder dan file. Misal folder `contoh` memiliki file `index.vue` maka sama saja dengan url `/contoh`. atau folder `contoh` memiliki file `[unit].unit` dapat menjadi url `/contoh/88`.
