var pemain1 = 'John';
var pemain2 = 'Jeff';
var pemain3 = 'Rodolf';

var tinggi1 = 190;
var tinggi2 = 170;
var tinggi3 = 176;

var umur1 = 27;
var umur2 = 24;
var umur3 = 30;

var skor1 = tinggi1 + (5 * umur1);
var skor2 = tinggi2 + (5 * umur2);
var skor3 = tinggi3 + (5 * umur3);

if (skor1 > skor2 && skor1 > skor3) {
	console.log(pemain1 + ' menang dengan skor ' + skor1 + ' point');
} else if (skor2 > skor1 && skor2 > skor3) {
	console.log(pemain2 + ' menanng dengan skor ' + skor2 + ' point');
} else if (skor3 > skor1 && skor3 > skor2) {
	console.log(pemain3 + ' menang dengan skor ' + skor3 + ' point');
} else {
	console.log('Hasil Imbang');	
}
