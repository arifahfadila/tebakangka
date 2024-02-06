alert(" game tebak angka \n pilih angka 1-10 \n kamu punya 2 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 2; nyawa >= 1; nyawa--) {
const tebakanUser = prompt("masukkan tebakan angka");

if (tebakanUser == angkaBenar) {
    alert(` KO BENER SI ,KEREN KAMU \n angka yang benar ialah ${angkaBenar}`);
    break;
} else if(tebakanUser > angkaBenar) {
    alert(` tebakanmu kebesaran \n kamu masih punya ${nyawa - 1} kesempatan`);
} else if(tebakanUser < angkaBenar) {  
    alert(` tebakanmu kekecilan \n kamu masih punya ${nyawa - 1} kesempatan`);
}

if(nyawa == 1) {
    alert(` kamu gagal \n angka yang benar adalah ${angkaBenar}`);
}
}