document.addEventListener('DOMContentLoaded', () => {
    const files = [
        'document1.txt', 'presentation1.pdf', 'song1.mp3', 'installer1.exe', 'archive1.rar',
        'report1.docx', 'image1.jpg', 'graphic1.png', 'animation1.gif', 'compressed1.zip',
        'document2.txt', 'presentation2.pdf', 'song2.mp3', 'installer2.exe', 'archive2.rar',
        'report2.docx', 'image2.jpg', 'graphic2.png', 'animation2.gif', 'compressed2.zip',
        'document3.txt', 'presentation3.pdf', 'song3.mp3', 'installer3.exe', 'archive3.rar',
        'report3.docx', 'image3.jpg', 'graphic3.png', 'animation3.gif', 'compressed3.zip',
        'document4.txt', 'presentation4.pdf', 'song4.mp3', 'installer4.exe', 'archive4.rar',
        'report4.docx', 'image4.jpg', 'graphic4.png', 'animation4.gif', 'compressed4.zip',
        'document5.txt', 'presentation5.pdf', 'song5.mp3', 'installer5.exe', 'archive5.rar',
        'report5.docx', 'image5.jpg', 'graphic5.png', 'animation5.gif', 'compressed5.zip',
        'document6.txt', 'presentation6.pdf', 'song6.mp3', 'installer6.exe', 'archive6.rar',
        'report6.docx', 'image6.jpg', 'animation6.gif', 'compressed6.zip',
        'document7.txt', 'presentation7.pdf', 'song7.mp3', 'installer7.exe', 'archive7.rar',
        'report7.docx', 'image7.jpg', 'graphic7.png', 'animation7.gif', 'compressed7.zip',
        'document8.txt', 'presentation8.pdf', 'song8.mp3', 'installer8.exe', 'archive8.rar',
        'report8.docx', 'image8.jpg', 'animation8.gif', 'compressed8.zip',
        'document9.txt', 'presentation9.pdf', 'song9.mp3', 'installer9.exe', 'archive9.rar',
        'report9.docx', 'image9.jpg', 'animation9.gif', 'compressed9.zip',
        'document10.txt', 'presentation10.pdf', 'song10.mp3', 'installer10.exe', 'archive10.rar',
        'report10.docx', 'image10.jpg', 'graphic10.png', 'animation10.gif', 'compressed10.zip',
    ];

    const foldersDiv = document.getElementById('folders');
    const fileListDiv = document.getElementById('fileList');
    const searchInput = document.getElementById('searchInput');
    let currentFolderType = '';
    let isAscending = true;

    function categorizeFiles() {
        const fileTypes = Array.from(new Set(files.map(file => file.split('.').pop()).filter(ext => ext)));
        fileTypes.forEach(type => {
            const folderDiv = document.createElement('div');
            folderDiv.classList.add('folder');
            folderDiv.textContent = `.${type}`;
            folderDiv.addEventListener('click', () => displayFiles(type));
            foldersDiv.appendChild(folderDiv);
        });
    }

    function displayFiles(type) {
        fileListDiv.innerHTML = '';
        currentFolderType = type;
        const filteredFiles = files.filter(file => file && file.endsWith(`.${type}`));
        
        filteredFiles.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.classList.add('file');
            fileDiv.textContent = file;
            fileListDiv.appendChild(fileDiv);
        });

        const sortButton = document.createElement('button');
        sortButton.id = 'sortButton';
        sortButton.textContent = 'Sort Ascending';
        sortButton.addEventListener('click', () => {
            isAscending = !isAscending;
            sortFiles();
        });
        fileListDiv.appendChild(sortButton);
    }

    function sortFiles() {
        const fileDivs = Array.from(fileListDiv.querySelectorAll('.file'));
        const sortedFiles = fileDivs.map(fileDiv => fileDiv.textContent)
                                    .sort((a, b) => isAscending ? a.localeCompare(b) : b.localeCompare(a));
        fileListDiv.querySelectorAll('.file').forEach(fileDiv => fileDiv.remove());

        sortedFiles.forEach(fileName => {
            const fileDiv = document.createElement('div');
            fileDiv.classList.add('file');
            fileDiv.textContent = fileName;
            fileListDiv.appendChild(fileDiv);
        });

        const sortButton = document.getElementById('sortButton');
        sortButton.textContent = isAscending ? 'Sort Descending' : 'Sort Ascending';
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const fileDivs = Array.from(fileListDiv.querySelectorAll('.file'));
        fileDivs.forEach(fileDiv => {
            fileDiv.style.display = fileDiv.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    });

    categorizeFiles();
});
let resolveAction;
let rejectAction;

function showModel(actionType,files){
    document.getElementById("confirmationText").textContent = "Are you sure you want to delete?";
    document.getElementById("confirmationModel").style.display='block';

    return new Promise((resolve,reject)=>{
        resolveAction = resolve;
        rejectAction = reject;
    });
}

function confirmAction(){
    resolveAction('Action Confirmed');
    document.getElementById('confirmationModel').style.display='none';

}

function cancelAction(){
    rejectAction('Action canceled');
    document.getElementById('confirmationModel').style.display='none';
}

showModel('delete','document1.txt')
.then(successMessage => console.log(successMessage))
.catch(errorMessage => alert(errorMessage));