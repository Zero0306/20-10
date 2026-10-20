/**
 * ============================================================================
 * 💖 CẤU HÌNH THÔNG TIN, HÌNH ẢNH & LỜI CHÚC (ĐÃ BỔ SUNG ĐẦY ĐỦ 41 ẢNH CỦA EM BÉ ANH ANH)
 * ============================================================================
 */
const CONFIG = {
    // Tên người nhận
    recipientName: "Em Bé Anh Anh",

    // Bó hoa 6 bông mới (Giai đoạn 1)
    flowerImage: "flower.png?v=5",

    // 6 bức ảnh cắt nền (tách nền) sắc nét ứng với đúng 6 bông hoa trên bó hoa
    sproutPhotos: [
        "images/cutout_06.png?v=4",           // 1. Đỉnh trên bên trái (Hoa kem)
        "images/cutout_01.png?v=4",           // 2. Đỉnh trên chính giữa (Hoa hồng)
        "images/cutout_03.png?v=4",           // 3. Đỉnh trên bên phải (Tóc tết hoa)
        "images/cutout_07.png?v=5",           // 4. Giữa bên trái (Ảnh mới chu môi - Đã khử sạch viền)
        "images/cutout_04.png?v=4",           // 5. Chính giữa bó hoa (Áo sọc ôm má)
        "images/letter_girl_cutout.png?v=4"   // 6. Giữa bên phải (Áo vàng cười tươi)
    ],

    // Toàn bộ 41 bức ảnh trôi nổi trong dải ngân hà 3D đa tầng (Giai đoạn 2)
    galaxyPhotos: [
        "images/photo_01.jpg",
        "images/photo_02.jpg",
        "images/photo_03.jpg",
        "images/photo_04.jpg",
        "images/photo_05.jpg",
        "images/photo_06.jpg",
        "images/photo_07.jpg",
        "images/photo_08.jpg",
        "images/photo_09.jpg",
        "images/photo_10.jpg",
        "images/photo_11.jpg",
        "images/photo_12.jpg",
        "images/photo_13.jpg",
        "images/photo_14.jpg",
        "images/photo_15.jpg",
        "images/photo_16.jpg",
        "images/photo_17.jpg",
        "images/photo_18.jpg",
        "images/photo_19.jpg",
        "images/photo_20.jpg",
        "images/photo_21.jpg",
        "images/photo_22.jpg",
        "images/photo_23.jpg",
        "images/photo_24.jpg",
        "images/photo_25.jpg",
        "images/photo_26.jpg",
        "images/photo_27.jpg",
        "images/photo_28.jpg",
        "images/photo_29.jpg",
        "images/photo_30.jpg",
        "images/photo_31.jpg",
        "images/photo_32.jpg",
        "images/photo_33.jpg",
        "images/photo_34.jpg",
        "images/photo_35.jpg",
        "images/photo_36.jpg",
        "images/photo_37.jpg",
        "images/photo_38.jpg",
        "images/photo_39.jpg",
        "images/photo_40.jpg",
        "images/photo_41.jpg"
    ],

    // Bức ảnh chân dung lồng hoa sắc nét gắn ở góc bức thư (Giai đoạn 3)
    letterPhoto: "images/letter_framed_portrait.png?v=2",

    // Các cụm từ lời chúc màu hồng phát sáng trong không gian 3D (chuẩn theo video 20-10.mp4)
    wishes: [
        "Chúc em luôn vui vẻ và hạnh phúc",
        "Chúc em luôn yêu đời",
        "mãi yêu em",
        "20/10",
        "Chúc em luôn xinh đẹp",
        "Chúc mừng ngày phụ nữ việt nam",
        "yêu em",
        "Chúc em thật nhiều may mắn",
        "Mong mọi điều dịu dàng sẽ đến với em",
        "Nụ cười của em là điều ngọt ngào nhất",
        "Yêu em nhiều hơn mỗi ngày"
    ],

    // Nội dung bức thư tình (Cập nhật chuẩn chính tả nhấn nhá và icon nụ hôn trái tim 😘)
    letterTitle: "Gửi vợ yêu của anh ♡",
    letterLines: [
        "Chúc em bé của anh một ngày 20/10 ngập tràn niềm vui và luôn nở nụ cười rạng rỡ như bó hoa trên này nhóoooo.",
        "Cảm ơn em vì đã đến bên anh, làm cho mỗi ngày bình thường của anh đều trở nên ấm áp và đáng yêu hơn.",
        "Chồng nhớ vợ nhắm, gửi vợ nhiều cái ôm, nhiều cái thơm má nhóoooo moa moa moaaaaaaaaaaaaaaaaa 😘😘😘😘😘😘😘😘😘😘😘😘.",
        "Anh yêu bé nhiềuuuuuuuuuuuuu 💖"
    ],

    // Lời bài hát nổi lơ lửng đồng bộ theo thời gian nhạc trong video 20-10.mp4 (Định dạng 2 dòng thơ mộng)
    lyricsTimeline: [
        { time: 0.0, text: '“ Chờ anh chút thôi,\nđã phiền em phải đợi... ”' },
        { time: 3.5, text: '“ Có anh ở đây rồi... ”' },
        { time: 5.8, text: '“ Vẫn gần em thôi\ndù xa cách phương trời ”' },
        { time: 10.5, text: '“ Cầm tay anh,\ndựa vai anh ”' },
        { time: 13.5, text: '“ Kề bên anh\nnơi này có anh ”' },
        { time: 16.5, text: '“ Ngàn ánh sao\nvụt qua nhẹ ôm lấy em. ”' },
        { time: 22.0, text: '“ Cầm tay anh,\ndựa vai anh... ”' },
        { time: 24.5, text: '“ Kề bên anh\nnơi này có anh ”' },
        { time: 27.5, text: '“ Nguyện mãi bên cạnh nhau\nyêu say đắm như ngày đầu ”' }
    ],

    // Nguồn âm thanh trực tiếp từ video 20-10.mp4
    musicUrl: "20-10.mp4"
};

// ============================================================================
// HỆ THỐNG ÂM THANH & ĐỒNG BỘ LỜI BÀI HÁT (AUDIO & FLOATING LYRICS)
// ============================================================================
class RomanticSoundManager {
    constructor() {
        this.isPlaying = false;
        this.audioEl = document.getElementById('bgm-audio');
        this.btnEl = document.getElementById('music-control');
        this.lyricsEl = document.getElementById('lyrics-text');
        this.lyricsContainer = document.getElementById('floating-lyrics');
        this.audioCtx = null;
        this.fallbackTimer = null;
        this.lyricCycleIndex = 0;

        this.init();
    }

    init() {
        if (CONFIG.musicUrl) {
            this.audioEl.src = CONFIG.musicUrl;
        }

        this.btnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePlay();
        });

        const autoPlayOnTouch = () => {
            if (!this.isPlaying) {
                this.play();
            }
            window.removeEventListener('pointerdown', autoPlayOnTouch);
        };
        window.addEventListener('pointerdown', autoPlayOnTouch);

        this.audioEl.addEventListener('timeupdate', () => {
            this.syncLyrics(this.audioEl.currentTime);
        });

        this.startFallbackLyricsCycle();
    }

    syncLyrics(currentTime) {
        const timeline = CONFIG.lyricsTimeline;
        let matchedText = timeline[0].text;

        for (let i = 0; i < timeline.length; i++) {
            if (currentTime >= timeline[i].time) {
                matchedText = timeline[i].text;
            } else {
                break;
            }
        }

        if (this.lyricsEl.textContent !== matchedText) {
            this.lyricsEl.style.opacity = '0';
            this.lyricsEl.style.transform = 'translateY(6px)';
            setTimeout(() => {
                this.lyricsEl.textContent = matchedText;
                this.lyricsEl.style.opacity = '1';
                this.lyricsEl.style.transform = 'translateY(0)';
            }, 250);
        }
    }

    startFallbackLyricsCycle() {
        if (this.fallbackTimer) clearInterval(this.fallbackTimer);
        this.fallbackTimer = setInterval(() => {
            if (!this.isPlaying || this.audioEl.paused) {
                const timeline = CONFIG.lyricsTimeline;
                this.lyricCycleIndex = (this.lyricCycleIndex + 1) % timeline.length;
                this.lyricsEl.textContent = timeline[this.lyricCycleIndex].text;
            }
        }, 3600);
    }

    playSparkleChime() {
        try {
            if (!this.audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.audioCtx = new AudioContext();
            }
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const now = this.audioCtx.currentTime;
            const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];
            chords.forEach((freq, idx) => {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.05);

                gain.gain.setValueAtTime(0, now + idx * 0.05);
                gain.gain.linearRampToValueAtTime(0.06, now + idx * 0.05 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.5);

                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now + idx * 0.05);
                osc.stop(now + idx * 0.05 + 0.6);
            });
        } catch (e) {
            // Ignore error
        }
    }

    play() {
        this.isPlaying = true;
        this.btnEl.classList.add('playing');
        this.audioEl.play().catch(() => {});
    }

    pause() {
        this.isPlaying = false;
        this.btnEl.classList.remove('playing');
        this.audioEl.pause();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
}

// ============================================================================
// KHỞI TẠO THREE.JS VŨ TRỤ 3D ĐA TẦNG (CHUẨN TIKTOK I.DLOVE.VN - BILLBOARD HOÀN TOÀN)
// ============================================================================
class CosmicUniverse {
    constructor() {
        this.canvas = document.getElementById('cosmic-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.starsMesh = null;
        this.starCount = 2200;
        this.interactiveGroup = null;
        this.clickableObjects = [];
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.isDragging = false;
        this.prevPointerPos = { x: 0, y: 0 };
        this.targetRotationY = 0;
        this.targetRotationX = 0;
        this.currentRotationY = 0;
        this.currentRotationX = 0;

        const aspect = window.innerWidth / window.innerHeight;
        const isMobile = aspect < 1;
        this.cameraZ = isMobile ? 165 : 130;
        this.targetCameraZ = this.cameraZ;
        this.currentPhase = 1;

        this.init();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x06030c, 0.002);

        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 2000);
        this.camera.position.z = this.cameraZ;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Ánh sáng trắng trong trẻo và ấm áp
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
        this.scene.add(ambientLight);

        this.createCosmicStars();

        this.interactiveGroup = new THREE.Group();
        this.scene.add(this.interactiveGroup);
        this.buildGalaxyContent();

        this.interactiveGroup.scale.set(0.001, 0.001, 0.001);
        this.interactiveGroup.visible = false;

        this.setupEventListeners();

        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
    }

    createStarTexture() {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.25, 'rgba(255, 192, 203, 0.9)');
        gradient.addColorStop(0.5, 'rgba(255, 42, 133, 0.35)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    }

    createCosmicStars() {
        const starGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(this.starCount * 3);
        const colors = new Float32Array(this.starCount * 3);

        const colorPalette = [
            new THREE.Color(0xffffff),
            new THREE.Color(0xffb6c1),
            new THREE.Color(0xff2a85),
            new THREE.Color(0xffe4b5),
            new THREE.Color(0xd8bfd8)
        ];

        for (let i = 0; i < this.starCount; i++) {
            const radius = 200 + Math.random() * 650;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            const pickedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = pickedColor.r;
            colors[i * 3 + 1] = pickedColor.g;
            colors[i * 3 + 2] = pickedColor.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const starMat = new THREE.PointsMaterial({
            size: 4.2,
            map: this.createStarTexture(),
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.starsMesh = new THREE.Points(starGeo, starMat);
        this.scene.add(this.starsMesh);
    }

    createNeonWishTexture(text, sizeType = 'medium') {
        const isHero = sizeType === 'hero';
        const isShort = sizeType === 'short';

        const fontSize = isHero ? 62 : (isShort ? 44 : 52);
        const fontStr = `bold ${fontSize}px "Quicksand", "Nunito", "Montserrat", sans-serif`;

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.font = fontStr;
        const metrics = tempCtx.measureText(text);
        const textWidth = Math.ceil(metrics.width);

        const padX = isHero ? 60 : 44;
        const padY = isHero ? 42 : 32;
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(128, textWidth + padX * 2);
        canvas.height = Math.max(70, fontSize + padY * 2);

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.font = fontStr;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;

        // Vòng phát sáng rộng bên ngoài (Aura hồng neon)
        ctx.save();
        ctx.strokeStyle = '#ff1493';
        ctx.lineWidth = isHero ? 9 : 7;
        ctx.shadowColor = '#ff2a85';
        ctx.shadowBlur = isHero ? 20 : 16;
        ctx.strokeText(text, cx, cy);
        ctx.restore();

        // Viền nét hồng cánh sen sắc nét
        ctx.save();
        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = isHero ? 5 : 4;
        ctx.shadowColor = '#ff1493';
        ctx.shadowBlur = 8;
        ctx.strokeText(text, cx, cy);
        ctx.restore();

        // Lòng chữ trắng tinh khôi sáng rõ chuẩn TikTok i.dlove.vn
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, cx, cy);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        return {
            texture,
            aspect: canvas.width / canvas.height,
            width: canvas.width,
            height: canvas.height
        };
    }

    createNeonPhotoCard(img) {
        const cardW = 320;
        const cardH = 380;
        const radius = 24;
        const pad = 6;

        const canvas = document.createElement('canvas');
        canvas.width = cardW;
        canvas.height = cardH;
        const ctx = canvas.getContext('2d');

        const drawRRect = (x, y, w, h, r) => {
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(x, y, w, h, r);
            } else {
                ctx.moveTo(x + r, y);
                ctx.lineTo(x + w - r, y);
                ctx.quadraticCurveTo(x + w, y, x + w, y + r);
                ctx.lineTo(x + w, y + h - r);
                ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
                ctx.lineTo(x + r, y + h);
                ctx.quadraticCurveTo(x, y + h, x, y + h - r);
                ctx.lineTo(x, y + r);
                ctx.quadraticCurveTo(x, y, x + r, y);
            }
            ctx.closePath();
        };

        const innerW = cardW - pad * 2;
        const innerH = cardH - pad * 2;

        // 1. Cắt góc bo tròn mềm mại cho ảnh của người yêu
        ctx.save();
        drawRRect(pad, pad, innerW, innerH, radius);
        ctx.clip();

        const imgW = img.naturalWidth || img.width || 300;
        const imgH = img.naturalHeight || img.height || 300;
        const imgAspect = imgW / imgH;
        const targetAspect = innerW / innerH;

        let sx = 0, sy = 0, sw = imgW, sh = imgH;
        if (imgAspect > targetAspect) {
            sw = imgH * targetAspect;
            sx = (imgW - sw) / 2;
        } else {
            sh = imgW / targetAspect;
            sy = Math.max(0, (imgH - sh) * 0.22); // Canh khuôn mặt xinh xắn
        }
        ctx.drawImage(img, sx, sy, sw, sh, pad, pad, innerW, innerH);
        ctx.restore();

        // 2. Viền neon hồng phát sáng tinh tế
        ctx.save();
        drawRRect(pad, pad, innerW, innerH, radius);
        ctx.strokeStyle = '#ff2a85';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#ff1493';
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.restore();

        // 3. Đường line trắng mảnh viền trong
        ctx.save();
        drawRRect(pad + 1.5, pad + 1.5, innerW - 3, innerH - 3, radius - 1.5);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        return texture;
    }

    createGlowingHeartTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        ctx.save();
        ctx.shadowColor = '#ff1493';
        ctx.shadowBlur = 18;
        ctx.font = '74px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('❤️', 64, 68);
        ctx.restore();

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        return texture;
    }

    buildGalaxyContent() {
        const isMobile = (window.innerWidth / window.innerHeight) < 1;

        // 1. TẠO CÂU CHÚC TIÊU ĐIỂM (HERO WISH) CHÍNH GIỮA TIỀN CẢNH: "Chúc em luôn vui vẻ và hạnh phúc"
        const heroWish = this.createNeonWishTexture("Chúc em luôn vui vẻ và hạnh phúc", "hero");
        const heroMat = new THREE.SpriteMaterial({
            map: heroWish.texture,
            transparent: true,
            depthWrite: false
        });
        const heroSprite = new THREE.Sprite(heroMat);
        const heroW = isMobile ? 36 : 42;
        heroSprite.scale.set(heroW, heroW / heroWish.aspect, 1);
        heroSprite.position.set(0, 1.2, isMobile ? 70 : 66);
        heroSprite.userData = {
            isClickable: true,
            type: 'wish',
            basePos: new THREE.Vector3(0, 1.2, isMobile ? 70 : 66),
            floatOffset: 0
        };
        this.interactiveGroup.add(heroSprite);
        this.clickableObjects.push(heroSprite);

        // 2. DANH SÁCH TOÀN BỘ CÁC LỜI CHÚC & TỪ NGỮ ĐA TẦNG (CHUẨN TIKTOK I.DLOVE.VN)
        const wishesData = [
            { text: "Chúc em luôn yêu đời", type: "medium" },
            { text: "Chúc em luôn xinh đẹp", type: "medium" },
            { text: "yêu em", type: "short" },
            { text: "20/10", type: "short" },
            { text: "mãi yêu em", type: "short" },
            { text: "Chúc em luôn yêu đời", type: "medium" },
            { text: "chúc em thật nhiều may mắn", type: "medium" },
            { text: "yêu em", type: "short" },
            { text: "Mong mọi điều dịu dàng sẽ đến với em", type: "medium" },
            { text: "20/10", type: "short" },
            { text: "mãi yêu em", type: "short" },
            { text: "Chúc em luôn xinh đẹp", type: "medium" },
            { text: "yêu em", type: "short" },
            { text: "chúc mừng ngày phụ nữ việt nam", type: "medium" },
            { text: "20/10", type: "short" },
            { text: "Yêu em nhiều hơn mỗi ngày", type: "medium" },
            { text: "yêu em", type: "short" },
            { text: "mãi yêu em", type: "short" },
            { text: "Chúc em luôn yêu đời", type: "medium" },
            { text: "Nụ cười của em là điều ngọt ngào nhất", type: "medium" },
            { text: "20/10", type: "short" },
            { text: "yêu em", type: "short" },
            { text: "chúc em thật nhiều may mắn", type: "medium" },
            { text: "mãi yêu em", type: "short" },
            { text: "20/10", type: "short" },
            { text: "Chúc em luôn xinh đẹp", type: "medium" },
            { text: "yêu em", type: "short" },
            { text: "mãi yêu em", type: "short" },
            { text: "Chúc em luôn hạnh phúc", type: "medium" },
            { text: "20/10", type: "short" },
            { text: "yêu em", type: "short" },
            { text: "Luôn rạng rỡ như ánh mặt trời", type: "medium" },
            { text: "20/10", type: "short" }
        ];

        // 3. TẠO 16 TRÁI TIM PHÁT SÁNG BAY XUNG QUANH
        const heartTex = this.createGlowingHeartTexture();
        const heartMat = new THREE.SpriteMaterial({
            map: heartTex,
            transparent: true,
            depthWrite: false
        });

        // 4. TẬP HỢP TOÀN BỘ 90 PHẦN TỬ (41 ẢNH + 33 LỜI CHÚC + 16 TRÁI TIM) VÀ TRỘN ĐỀU
        const items = [];
        CONFIG.galaxyPhotos.forEach(src => items.push({ kind: 'photo', src }));
        wishesData.forEach(w => items.push({ kind: 'wish', text: w.text, sizeType: w.type }));
        for (let h = 0; h < 16; h++) {
            items.push({ kind: 'heart' });
        }

        // Shuffle nhẹ theo bước nhảy số nguyên tố để phân bổ đều khắp không gian
        const totalItems = items.length;
        const shuffled = [];
        const step = 17;
        const visited = new Set();
        for (let i = 0; i < totalItems; i++) {
            let idx = (i * step) % totalItems;
            while (visited.has(idx)) {
                idx = (idx + 1) % totalItems;
            }
            visited.add(idx);
            shuffled.push(items[idx]);
        }

        // 5. PHÂN BỐ ĐỀU TRÊN HÌNH CẦU FIBONACCI (FIBONACCI SPHERE)
        const baseR = isMobile ? 74 : 70;
        const goldenAngle = 2.39996323;

        shuffled.forEach((item, k) => {
            const yNorm = 1 - ((k + 0.5) / totalItems) * 2; // từ đỉnh trên xuống đáy dưới
            const rNorm = Math.sqrt(Math.max(0.04, 1 - yNorm * yNorm));
            const theta = k * goldenAngle;

            // Biến thiên bán kính r để tạo độ dày 3D đa tầng mềm mại
            const radiusJitter = 0.82 + ((k * 37) % 100) / 100 * 0.34;
            const r = baseR * radiusJitter;

            const x = Math.cos(theta) * rNorm * r;
            const y = yNorm * r * (isMobile ? 1.08 : 0.96);
            const z = Math.sin(theta) * rNorm * r;

            if (item.kind === 'photo') {
                const img = new Image();
                img.onload = () => {
                    const photoTex = this.createNeonPhotoCard(img);
                    const mat = new THREE.SpriteMaterial({
                        map: photoTex,
                        transparent: true,
                        depthWrite: false
                    });
                    const sprite = new THREE.Sprite(mat);
                    const photoW = isMobile ? 15.5 : 17.5;
                    const photoH = photoW * (380 / 320);
                    sprite.scale.set(photoW, photoH, 1);
                    sprite.position.set(x, y, z);
                    sprite.userData = {
                        isClickable: true,
                        type: 'photo',
                        basePos: new THREE.Vector3(x, y, z),
                        floatOffset: k * 0.22
                    };
                    this.interactiveGroup.add(sprite);
                    this.clickableObjects.push(sprite);
                };
                img.src = item.src;
            } else if (item.kind === 'wish') {
                const wishObj = this.createNeonWishTexture(item.text, item.sizeType);
                const mat = new THREE.SpriteMaterial({
                    map: wishObj.texture,
                    transparent: true,
                    depthWrite: false
                });
                const sprite = new THREE.Sprite(mat);
                const wScale = item.sizeType === 'short' ? (isMobile ? 15 : 18) : (isMobile ? 26 : 30);
                sprite.scale.set(wScale, wScale / wishObj.aspect, 1);
                sprite.position.set(x, y, z);
                sprite.userData = {
                    isClickable: true,
                    type: 'wish',
                    basePos: new THREE.Vector3(x, y, z),
                    floatOffset: k * 0.22
                };
                this.interactiveGroup.add(sprite);
                this.clickableObjects.push(sprite);
            } else if (item.kind === 'heart') {
                const sprite = new THREE.Sprite(heartMat);
                const hSize = isMobile ? 5.5 : 6.5;
                sprite.scale.set(hSize, hSize, 1);
                sprite.position.set(x, y, z);
                sprite.userData = {
                    isClickable: true,
                    type: 'heart',
                    basePos: new THREE.Vector3(x, y, z),
                    floatOffset: k * 0.22
                };
                this.interactiveGroup.add(sprite);
                this.clickableObjects.push(sprite);
            }
        });
    }

    setupEventListeners() {
        const onPointerDown = (e) => {
            if (this.currentPhase !== 2) return;
            this.isDragging = true;
            this.pointerDownX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            this.pointerDownY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
            this.prevPointerPos = { x: this.pointerDownX, y: this.pointerDownY };
            this.hasMovedSignificantly = false;
        };

        const onPointerMove = (e) => {
            if (!this.isDragging || this.currentPhase !== 2) return;
            const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

            const deltaX = clientX - this.prevPointerPos.x;
            const deltaY = clientY - this.prevPointerPos.y;

            if (Math.abs(clientX - this.pointerDownX) > 6 || Math.abs(clientY - this.pointerDownY) > 6) {
                this.hasMovedSignificantly = true;
            }

            this.targetRotationY += deltaX * 0.005;
            this.targetRotationX += deltaY * 0.0035;
            this.targetRotationX = Math.max(-0.48, Math.min(0.48, this.targetRotationX));

            this.prevPointerPos = { x: clientX, y: clientY };
        };

        const onPointerUp = (e) => {
            if (this.currentPhase !== 2) return;
            this.isDragging = false;

            if (!this.hasMovedSignificantly) {
                const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || this.pointerDownX;
                const clientY = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || this.pointerDownY;
                this.checkRaycastClick(clientX, clientY);
            }
        };

        const onWheel = (e) => {
            if (this.currentPhase !== 2) return;
            this.targetCameraZ += e.deltaY * 0.08;
            this.targetCameraZ = Math.max(90, Math.min(240, this.targetCameraZ));
        };

        window.addEventListener('resize', () => {
            if (!this.camera || !this.renderer) return;
            const aspect = window.innerWidth / window.innerHeight;
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            const isMobile = aspect < 1;
            this.targetCameraZ = isMobile ? 165 : 130;
        });

        window.addEventListener('pointerdown', onPointerDown, { passive: true });
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerup', onPointerUp, { passive: true });
        window.addEventListener('wheel', onWheel, { passive: true });
    }

    checkRaycastClick(clientX, clientY) {
        this.pointer.x = (clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.clickableObjects, true);

        if (intersects.length > 0) {
            app.sound.playSparkleChime();
            app.openPhase3Letter();
        }
    }

    transitionToPhase2() {
        this.currentPhase = 2;
        this.interactiveGroup.visible = true;

        let progress = 0;
        const duration = 1200;
        const startTime = performance.now();

        const animateScale = (now) => {
            const elapsed = now - startTime;
            progress = Math.min(1, elapsed / duration);
            const ease = 1 - Math.pow(1 - progress, 3);
            this.interactiveGroup.scale.set(ease, ease, ease);

            if (progress < 1) {
                requestAnimationFrame(animateScale);
            }
        };
        requestAnimationFrame(animateScale);
    }

    animate() {
        requestAnimationFrame(this.animate);

        const time = performance.now() * 0.001;

        if (this.starsMesh) {
            this.starsMesh.rotation.y += 0.0004;
            this.starsMesh.rotation.x += 0.00015;
        }

        if (this.interactiveGroup && this.currentPhase === 2) {
            this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.06;
            this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.06;

            if (!this.isDragging) {
                this.targetRotationY += 0.0012;
            }

            this.interactiveGroup.rotation.y = this.currentRotationY;
            this.interactiveGroup.rotation.x = this.currentRotationX;

            this.cameraZ += (this.targetCameraZ - this.cameraZ) * 0.08;
            this.camera.position.z = this.cameraZ;

            // Micro-animation trôi nổi nhẹ nhàng cho từng phần tử
            this.interactiveGroup.children.forEach((child) => {
                if (child.userData && child.userData.basePos) {
                    const bp = child.userData.basePos;
                    child.position.y = bp.y + Math.sin(time * 1.6 + child.userData.floatOffset) * 1.6;
                }
            });
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// ============================================================================
// BỘ ĐIỀU PHỐI CHÍNH TOÀN BỘ ỨNG DỤNG (APP CONTROLLER)
// ============================================================================
class RomanticGiftApp {
    constructor() {
        this.sound = new RomanticSoundManager();
        this.universe = new CosmicUniverse();

        // Giai đoạn 1 elements
        this.phase1El = document.getElementById('phase1');
        this.phase2El = document.getElementById('phase2');
        this.bloomWrapper = document.getElementById('bloom-wrapper');
        this.bouquetBox = document.getElementById('bouquet-box');
        this.bouquetImg = document.getElementById('bouquet-img');
        this.sproutContainer = document.getElementById('sprout-photos-container');
        this.guideText1 = document.getElementById('guide-text-1');
        this.fingerHint = document.getElementById('finger-hint');

        // Giai đoạn 3 elements
        this.modalEl = document.getElementById('phase3-modal');
        this.closeLetterBtn = document.getElementById('close-letter-btn');
        this.envelopeWrapper = document.getElementById('envelope-wrapper');
        this.waxSeal = document.getElementById('wax-seal');
        this.letterPaper = document.getElementById('letter-paper');
        this.letterBody = document.getElementById('letter-body');
        this.letterTitle = document.getElementById('letter-title');
        this.letterPortraitImg = document.getElementById('letter-portrait-img');
        this.replayBtn = document.getElementById('replay-typewriter-btn');
        this.sendHeartsBtn = document.getElementById('send-hearts-btn');
        this.heartBurstContainer = document.getElementById('heart-burst-container');

        this.phase1Step = 0;
        this.longPressTimer = null;

        this.init();
    }

    init() {
        this.applyConfig();
        this.setupPhase1Interaction();
        this.setupPhase3Interaction();
    }

    applyConfig() {
        if (CONFIG.flowerImage) {
            this.bouquetImg.src = CONFIG.flowerImage;
        }

        // Tạo các ảnh bung nở ở Giai đoạn 1 từ mảng CONFIG.sproutPhotos
        this.sproutContainer.innerHTML = '';
        CONFIG.sproutPhotos.forEach((src) => {
            const div = document.createElement('div');
            div.className = 'sprout-photo';
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Em Bé Anh Anh';
            img.onerror = () => { img.src = CONFIG.flowerImage; };
            div.appendChild(img);
            this.sproutContainer.appendChild(div);
        });

        if (CONFIG.letterPhoto) {
            this.letterPortraitImg.src = CONFIG.letterPhoto;
        }

        if (CONFIG.letterTitle) {
            this.letterTitle.textContent = CONFIG.letterTitle;
        }
    }

    // ========================================================================
    // TƯƠNG TÁC GIAI ĐOẠN 1: BÓ HOA BẤT NGỜ
    // ========================================================================
    setupPhase1Interaction() {
        const handleFirstTap = () => {
            if (this.phase1Step === 0) {
                this.phase1Step = 1;
                this.sound.playSparkleChime();
                this.sound.play();

                this.sproutContainer.classList.add('bloomed');
                this.guideText1.innerHTML = 'Ấn giữ bó hoa';
                this.fingerHint.innerHTML = '👆✨';

                this.burstMiniHearts(window.innerWidth / 2, window.innerHeight / 2, 22);
            }
        };

        const handleSecondTapOrHold = () => {
            if (this.phase1Step === 1) {
                this.phase1Step = 2;
                this.sound.playSparkleChime();

                this.bouquetBox.classList.add('disappearing');
                this.sproutContainer.classList.add('disappearing');
                this.guideText1.style.opacity = '0';
                this.fingerHint.style.opacity = '0';

                this.burstMiniHearts(window.innerWidth / 2, window.innerHeight / 2, 38);

                setTimeout(() => {
                    this.phase1El.classList.remove('active');
                    this.phase2El.classList.add('active');
                    this.universe.transitionToPhase2();
                }, 850);
            }
        };

        const startHold = () => {
            if (this.phase1Step === 1) {
                this.longPressTimer = setTimeout(() => {
                    handleSecondTapOrHold();
                }, 380);
            }
        };

        const cancelHold = () => {
            if (this.longPressTimer) {
                clearTimeout(this.longPressTimer);
                this.longPressTimer = null;
            }
        };

        this.bloomWrapper.addEventListener('pointerdown', startHold);
        this.bloomWrapper.addEventListener('pointerup', () => {
            cancelHold();
            if (this.phase1Step === 0) {
                handleFirstTap();
            } else if (this.phase1Step === 1) {
                handleSecondTapOrHold();
            }
        });
        this.bloomWrapper.addEventListener('pointercancel', cancelHold);
    }

    // ========================================================================
    // TƯƠNG TÁC GIAI ĐOẠN 3: PHONG BÌ THƯ & BỨC THƯ TÌNH
    // ========================================================================
    setupPhase3Interaction() {
        this.envelopeWrapper.addEventListener('click', () => {
            this.openEnvelope();
        });

        this.closeLetterBtn.addEventListener('click', () => {
            this.closePhase3Letter();
        });

        this.replayBtn.addEventListener('click', () => {
            this.startTypewriter();
        });

        this.sendHeartsBtn.addEventListener('click', () => {
            const rect = this.sendHeartsBtn.getBoundingClientRect();
            this.burstMiniHearts(rect.left + rect.width / 2, rect.top, 50);
            this.sound.playSparkleChime();
        });
    }

    openPhase3Letter() {
        this.modalEl.classList.add('open');

        if (!this.envelopeWrapper.classList.contains('opened')) {
            this.waxSeal.classList.remove('broken');
            this.letterPaper.classList.remove('revealed');
        }
    }

    closePhase3Letter() {
        this.modalEl.classList.remove('open');
    }

    openEnvelope() {
        if (this.envelopeWrapper.classList.contains('opened')) return;

        this.sound.playSparkleChime();
        this.waxSeal.classList.add('broken');
        this.envelopeWrapper.classList.add('opened');

        const rect = this.waxSeal.getBoundingClientRect();
        this.burstMiniHearts(rect.left + 26, rect.top + 26, 25);

        setTimeout(() => {
            this.letterPaper.classList.add('revealed');
            this.startTypewriter();
        }, 600);
    }

    startTypewriter() {
        this.letterBody.innerHTML = '';
        const lines = CONFIG.letterLines;
        let lineIdx = 0;

        const typeLine = () => {
            if (lineIdx >= lines.length) return;

            // Dùng Array.from để tách chuẩn Unicode Code Points, không làm gãy các emoji có trái tim 😘 hay 💖
            const lineChars = Array.from(lines[lineIdx]);
            const lineElem = document.createElement('div');
            lineElem.className = 'letter-line';
            this.letterBody.appendChild(lineElem);

            let charIdx = 0;
            const cursor = document.createElement('span');
            cursor.className = 'typewriter-cursor';
            lineElem.appendChild(cursor);

            const typeChar = () => {
                if (charIdx < lineChars.length) {
                    const char = lineChars[charIdx];
                    cursor.before(char);
                    charIdx++;

                    this.letterPaper.scrollTop = this.letterPaper.scrollHeight;

                    let delay = 36;
                    if (char === ',' || char === '.') {
                        delay = 240;
                    } else if (char === '😘' || char === '💖' || char === '❤️' || char === '💕') {
                        delay = 75; // Mỗi nụ hôn 😘 nảy ra nhịp nhàng, siêu dễ thương
                    }
                    setTimeout(typeChar, delay);
                } else {
                    cursor.remove();
                    lineIdx++;
                    setTimeout(typeLine, 380);
                }
            };

            typeChar();
        };

        typeLine();
    }

    burstMiniHearts(originX, originY, count = 20) {
        const heartIcons = ['💖', '❤️', '💕', '🌸', '✨', '🌹'];

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'flying-heart';
            heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 180;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - (40 + Math.random() * 80);
            const tr = (Math.random() - 0.5) * 120 + 'deg';
            const size = 16 + Math.random() * 22;

            heart.style.left = originX + 'px';
            heart.style.top = originY + 'px';
            heart.style.fontSize = size + 'px';
            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
            heart.style.setProperty('--tr', tr);

            this.heartBurstContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2600);
        }
    }
}

let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new RomanticGiftApp();
});
