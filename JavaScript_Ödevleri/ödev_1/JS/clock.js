// Kullanıcıdan ismi al
let fullName = prompt("Adınız Nedir?");

// İsim alanını seç ve içeriği güncelle
let myName = document.querySelector("#myName");
myName.innerHTML += ` ${fullName}`;

// Zamanı gösteren saat fonksiyonu
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  // Saat, dakika ve saniye değerlerini kontrol et
  m = checkTime(m);
  s = checkTime(s);
  
  // HTML içindeki "txt" alanını güncelle
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  
  // Her 1 saniyede bir fonksiyonu tekrar çağır
  setTimeout(startTime, 1000);
}

// Saat, dakika ve saniye değerlerini kontrol et
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // 10'dan küçük sayıların önüne sıfır ekle
  return i;
}

// Tarih bilgisini al ve gün adını getir
var tarih = new Date();
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
document.getElementById('gun').innerHTML = gunler[tarih.getDay()] + " Tarihinde";
