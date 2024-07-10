/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#27C3A6',
        'secondary':'#FF6249',
        'transbg':'rgba(0,0,0,0.2)',
        'nearwhite':'#F8F9FA',
        'inputwhite':'#F4F4F5'
      },
      fontFamily: {
        rubik: ['Rubik'],
        inter:['Inter']
      },
      fontSize:{
        15: '15px'
      },
      margin:{
        'blogleft':'50px',
        'blogright':'100px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}