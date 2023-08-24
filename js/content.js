function showContent(contentId) {
    // Hide all content divs first
     const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(
        div => {div.style.display = 'none';}
    );

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}
function changeImage(newSrc) {
    const imageElement = document.getElementById('displayImage');
    imageElement.src = newSrc;
}