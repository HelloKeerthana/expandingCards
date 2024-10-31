 const panels = document.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClass();
                panel.classList.add('active');
            });
        });
        function removeActiveClass() {
            panels.forEach(panel => {
                panel.classList.remove('active');
            });
        }
        function makefavicon(letters, color, bckgrndcolor, fontszpx, x, y) {
            let canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            let ctx = canvas.getContext('2d');
            ctx.fillStyle = bckgrndcolor;
            ctx.fillRect(0, 0, 16, 16);
            ctx.fillStyle = color;
            ctx.font = "bold " + fontszpx + "px Arial";
            ctx.fillText(letters, x, y);
            document.getElementById("favicon-link").href = canvas.toDataURL("image/x-icon");
        }
        makefavicon("1", "white", "black", 10, 5, 12);