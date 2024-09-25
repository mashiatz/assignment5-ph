document.getElementById('btn-2').addEventListener('click', function () {
    document.getElementById('btn-1').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-2').classList.add('bg-[#B4F461]');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('transaction').classList.remove('hidden');

});

document.getElementById('btn-1').addEventListener('click', function () {
    document.getElementById('btn-2').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-1').classList.add('bg-[#B4F461]');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('transaction').classList.add('hidden');

});