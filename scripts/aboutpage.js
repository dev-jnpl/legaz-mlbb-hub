document.getElementById('profileToggle').addEventListener('change', function () {
    const profile1 = document.getElementById('profile1').querySelector('.who-details');
    const profile2 = document.getElementById('profile2').querySelector('.who-details');
    const profile1Image = document.getElementById('profile1').querySelector('.who-image img');
    const profile2Image = document.getElementById('profile2').querySelector('.who-image img');
    const toggleText = document.querySelector('.toggle-text');

    // Add 'hiding' and 'transform' class to trigger translateY for text
    profile1.classList.add('hiding', 'transform');
    profile2.classList.add('hiding', 'transform');

    // Add 'image-hiding' class to trigger fade-out for images
    profile1Image.classList.add('image-hiding');
    profile2Image.classList.add('image-hiding');

    // Wait for fade-out animation to complete before updating content
    setTimeout(() => {
        if (this.checked) {
            // On-Game Profile
            toggleText.innerText = "On-Game";

            // Update Profile 1 (In-Game)
            profile1.querySelector('.who-name').innerHTML = 
                `John Paul Laureano<br><span style="color: #ffffff;">IGN: JAEPY</span>`;
            profile1.querySelector('.who-data').innerHTML = `
                <h3>7082<br><span>Matches</span></h3>
                <h3>58.87%<br><span>Win Rate</span></h3>
                <h3>1056<br><span>MVPs</span></h3>
                <h3>
                Mythical Honor<br>
                <span>Current Rank</span></h3>
                <h3>
                Chou<br>
                <span>Favourite Hero</span></h3>
                <h3>
                Mythical Glory<br>
                <span>Peak Rank</span></h3>
                <h3>
                <div class="full-span soc-med">
                <div class="full-span soc-med">
                <a href="https://www.facebook.com/JAEPYYY?mibextid=ZbWKwL" target="_blank"><img src="images/png/facebook.png" alt="facebook"></a>
                <a href="https://m.me/JAEPYYY" target="_blank"><img src="images/png/messenger.png" alt="messenger"></a>
                <a href="https://www.instagram.com/paulaureano_?igsh=MWxka2Y2d2h2cXRubg==" target="_blank"><img src="images/png/instagram.png" alt="instagram"></a>
                <a href="t.me/janpol_123" target="_blank"><img src="images/png/telegram.png" alt="telegram"></a>
                <a href="https://www.tiktok.com/@jjjnpl?_t=8rejG1Wgwjg&_r=1" target="_blank"><img src="images/png/tiktok.png" alt="tiktok"></a>
            </div>
                
            `;
            profile1Image.src = 'images/pictures/mlbb-avatar.jpg';

            // Update Profile 2
            profile2.querySelector('.who-name').innerHTML = 
                `Charles Benedict Leodones<br><span style="color: #ffffff;">IGN: Ecnelis</span>`;
            profile2.querySelector('.who-data').innerHTML = `
                <h3>8592<br><span>Matches</span></h3>
                <h3>56.88%<br><span>Win Rate</span></h3>
                <h3>1409<br><span>MVPs</span></h3>
                <h3>
                Mythical Honor<br>
                <span>Current Rank</span></h3>
                <h3>
                Fanny<br>
                <span>Favourite Hero</span></h3>
                <h3>
                Mythical Glory<br>
                <span>Peak Rank</span></h3>
                <h3>
                <div class="full-span soc-med">
                <a href=""><img src="images/png/facebook.png" alt="facebook"></a>
                <a href=""><img src="images/png/messenger.png" alt="messenger"></a>
                <a href=""><img src="images/png/instagram.png" alt="instagram"></a>
                <a href=""><img src="images/png/telegram.png" alt="telegram"></a>
                <a href=""><img src="images/png/tiktok.png" alt="tiktok"></a>
                </div>
                
            `;
            profile2Image.src = 'images/pictures/mlbb-avatar.jpg';
        } else {
            // Offline Profile
            toggleText.innerText = "Off-Game";

            // Reset Profile 1 (Personal)
            profile1.querySelector('.who-name').innerHTML = 
                `John Paul Laureano<br><span style="color: #ffffff;">Developer</span>`;
            profile1.querySelector('.who-data').innerHTML = `
                <h3>BSIT Student<br><span>Education</span></h3>
                <h3>Adapting<br><span>Skill</span></h3>
                <h3>Reading Manhwas<br><span>Hobby</span></h3>
                <h3 class="full-span">
                <br>
                "Code is like humor. When you have to explain it, it’s bad."<br>
                <span>— Cory House</span></h3>
                <div class="full-span soc-med">
                <a href="https://www.facebook.com/JAEPYYY?mibextid=ZbWKwL" target="_blank"><img src="images/png/facebook.png" alt="facebook"></a>
                <a href="https://m.me/JAEPYYY" target="_blank"><img src="images/png/messenger.png" alt="messenger"></a>
                <a href="https://www.instagram.com/paulaureano_?igsh=MWxka2Y2d2h2cXRubg==" target="_blank"><img src="images/png/instagram.png" alt="instagram"></a>
                <a href="t.me/janpol_123" target="_blank"><img src="images/png/telegram.png" alt="telegram"></a>
                <a href="https://www.tiktok.com/@jjjnpl?_t=8rejG1Wgwjg&_r=1" target="_blank"><img src="images/png/tiktok.png" alt="tiktok"></a>
            </div>
            `;
            profile1Image.src = 'images/pictures/profile-jp.jpg';

            // Reset Profile 2
            profile2.querySelector('.who-name').innerHTML = 
                `Charles Benedict Leodones<br><span style="color: #ffffff;">Developer</span>`;
            profile2.querySelector('.who-data').innerHTML = `
                <h3>BSIT Student<br><span>Education</span></h3>
                <h3>Socializing<br><span>Skill</span></h3>
                <h3>Reading<br><span>Hobby</span></h3>
                <h3 class="full-span">
                <br>
                "Have you tried turning it off and on again?"<br>
                <span>— Every IT Guy Ever</span>
                <div class="full-span soc-med">
                <a href=""><img src="images/png/facebook.png" alt="facebook"></a>
                <a href=""><img src="images/png/messenger.png" alt="messenger"></a>
                <a href=""><img src="images/png/instagram.png" alt="instagram"></a>
                <a href=""><img src="images/png/telegram.png" alt="telegram"></a>
                <a href=""><img src="images/png/tiktok.png" alt="tiktok"></a>
                </div>
            `;
            profile2Image.src = 'images/pictures/profile-cb.jpg';
        }

        // Remove 'hiding' and 'transform' classes to trigger fade-in and reset position
        profile1.classList.remove('hiding', 'transform');
        profile2.classList.remove('hiding', 'transform');
        profile1Image.classList.remove('image-hiding');
        profile2Image.classList.remove('image-hiding');
    }, 500); // Matches the CSS transition duration
});
