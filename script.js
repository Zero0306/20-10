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

    // Lời bài hát nổi lơ lửng đồng bộ theo thời gian nhạc trong video 20-10.mp4
    lyricsTimeline: [
        { time: 0.0, text: '" Chờ anh chút thôi, đã phiền em phải đợi... "' },
        { time: 3.5, text: '" Có anh ở đây rồi... "' },
        { time: 5.8, text: '" VẪN GẦN EM THÔI DÙ XA CÁCH PHƯƠNG TRỜI "' },
        { time: 10.5, text: '" Cầm tay anh, dựa vai anh "' },
        { time: 13.5, text: '" Kề bên anh nơi này có anh "' },
        { time: 16.5, text: '" Gió mang câu tình ca, ngàn ánh sao vụt qua nhẹ ôm lấy em... "' },
        { time: 22.0, text: '" Cầm tay anh, dựa vai anh... "' },
        { time: 24.5, text: '"* Kề bên anh nơi này có anh *"' },
        { time: 27.5, text: '"* Nguyện mãi bên cạnh nhau yêu say đắm như ngày đầu *"' }
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
// KHỞI TẠO THREE.JS VŨ TRỤ 3D ĐA TẦNG (CHỨA ĐẦY ĐỦ 41 ẢNH CỦA BẠN GÁI)
// ============================================================================
class CosmicUniverse {
    constructor() {
        this.canvas = document.getElementById('cosmic-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.starsMesh = null;
        this.starCount = 2000;
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
        this.cameraZ = isMobile ? 180 : 130;
        this.targetCameraZ = this.cameraZ;
        this.currentPhase = 1;

        this.init();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x07060d, 0.0025);

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

        // Ánh sáng trắng trong trẻo và ấm áp, không làm ám màu ảnh
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xfff5ea, 0.65);
        dirLight.position.set(40, 80, 100);
        this.scene.add(dirLight);

        const centerGlow = new THREE.PointLight(0xffccd5, 0.5, 250);
        centerGlow.position.set(0, 0, 0);
        this.scene.add(centerGlow);

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
        gradient.addColorStop(0.25, 'rgba(255, 182, 193, 0.9)');
        gradient.addColorStop(0.5, 'rgba(255, 42, 133, 0.4)');
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
            new THREE.Color(0xff85b3),
            new THREE.Color(0xff2a85),
            new THREE.Color(0xffd166),
            new THREE.Color(0xb58ecc)
        ];

        for (let i = 0; i < this.starCount; i++) {
            const radius = 220 + Math.random() * 580;
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
            size: 4.5,
            map: this.createStarTexture(),
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.starsMesh = new THREE.Points(starGeo, starMat);
        this.scene.add(this.starsMesh);
    }

    createNeonTextTexture(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = '600 50px "Dancing Script", "Caveat", cursive, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Ánh sáng hồng phấn dịu nhẹ, thanh lịch (khử hoàn toàn màu lòe loẹt)
        ctx.shadowColor = 'rgba(255, 182, 193, 0.85)';
        ctx.shadowBlur = 14;
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        return texture;
    }

    createHeartMesh(colorHex = 0xff85a1, scale = 1) {
        const shape = new THREE.Shape();
        const x = 0, y = 0;
        shape.moveTo(x + 2.5, y + 2.5);
        shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2.0, y + 4.5, x, y + 4.5);
        shape.bezierCurveTo(x - 3.0, y + 4.5, x - 3.0, y + 1.5, x - 3.0, y + 1.5);
        shape.bezierCurveTo(x - 3.0, y - 0.5, x - 1.0, y - 2.5, x + 2.5, y - 5.5);
        shape.bezierCurveTo(x + 6.0, y - 2.5, x + 8.0, y - 0.5, x + 8.0, y + 1.5);
        shape.bezierCurveTo(x + 8.0, y + 1.5, x + 8.0, y + 4.5, x + 5.0, y + 4.5);
        shape.bezierCurveTo(x + 3.5, y + 4.5, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

        const extrudeSettings = {
            depth: 0.35,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 1,
            bevelSize: 0.2,
            bevelThickness: 0.2
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.center();

        const material = new THREE.MeshPhongMaterial({
            color: colorHex,
            emissive: 0x221118,
            specular: 0xffffff,
            shininess: 85,
            transparent: true,
            opacity: 0.88
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(scale, scale, scale);
        mesh.userData = { isClickable: true, type: 'heart' };
        return mesh;
    }

    // Xây dựng vũ trụ 3D tràn ngập toàn bộ 41 bức ảnh của Em Bé Anh Anh
    buildGalaxyContent() {
        const textureLoader = new THREE.TextureLoader();

        // 1. TRÁI TIM ĐẶC BIỆT CHÍNH GIỮA (Nhẹ nhàng, thanh tú)
        const specialHeart = this.createHeartMesh(0xff5c8a, 2.2);
        specialHeart.position.set(0, 0, 0);
        specialHeart.userData = { isClickable: true, isSpecialHeart: true, type: 'specialHeart' };
        this.interactiveGroup.add(specialHeart);
        this.clickableObjects.push(specialHeart);
        this.specialHeart = specialHeart;

        const ringGeo = new THREE.RingGeometry(15, 16.2, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xffd1dc,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2.3;
        specialHeart.add(ringMesh);
        this.specialRing = ringMesh;

        // 2. PHÂN BỐ TOÀN BỘ 41 KHUNG ẢNH POLAROID THANH LỊCH (TỐI ƯU HOÀN HẢO CHO MÀN HÌNH ĐIỆN THOẠI)
        const photoList = CONFIG.galaxyPhotos;
        const photoCount = photoList.length;

        // Texture mặt sau ảnh màu trắng ngà in trái tim hồng phấn
        const backCanvas = document.createElement('canvas');
        backCanvas.width = 128;
        backCanvas.height = 152;
        const bctx = backCanvas.getContext('2d');
        bctx.fillStyle = '#fffdfa';
        bctx.fillRect(0, 0, 128, 152);
        bctx.fillStyle = '#ffb6c1';
        bctx.font = '24px sans-serif';
        bctx.textAlign = 'center';
        bctx.textBaseline = 'middle';
        bctx.fillText('♥', 64, 76);
        const cardBackTex = new THREE.CanvasTexture(backCanvas);

        const isMobileView = (window.innerWidth / window.innerHeight) < 1;
        const cardW = isMobileView ? 11.5 : 14;
        const cardH = isMobileView ? 13.8 : 16.8;
        const photoSize = isMobileView ? 10.3 : 12.6;

        photoList.forEach((src, idx) => {
            // Phân bố đều hình trụ theo góc Hoàng kim (137.5 độ)
            const yOffset = -38 + (idx / (photoCount - 1)) * 76;
            const radius = (isMobileView ? 52 : 58) + (idx % 3) * 6;
            const angle = idx * 2.39996323;

            textureLoader.load(src, (tex) => {
                tex.minFilter = THREE.LinearFilter;
                tex.generateMipmaps = false;

                const cardGroup = new THREE.Group();

                // Mặt trước tấm bìa Polaroid màu trắng sạch sẽ
                const cardGeo = new THREE.PlaneGeometry(cardW, cardH);
                const cardMatFront = new THREE.MeshBasicMaterial({ color: 0xffffff });
                const cardFrontMesh = new THREE.Mesh(cardGeo, cardMatFront);
                cardGroup.add(cardFrontMesh);

                // Mặt sau tấm bìa
                const cardMatBack = new THREE.MeshBasicMaterial({ map: cardBackTex, side: THREE.BackSide });
                const cardBackMesh = new THREE.Mesh(cardGeo, cardMatBack);
                cardGroup.add(cardBackMesh);

                // Bức ảnh người yêu đặt trên bìa Polaroid (Màu sắc gốc tự nhiên, trong trẻo)
                const photoGeo = new THREE.PlaneGeometry(photoSize, photoSize);
                const photoMat = new THREE.MeshBasicMaterial({
                    map: tex,
                    side: THREE.FrontSide
                });
                const photoMesh = new THREE.Mesh(photoGeo, photoMat);
                photoMesh.position.set(0, (cardH - photoSize) * 0.28, 0.05);
                cardGroup.add(photoMesh);

                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                cardGroup.position.set(x, yOffset, z);

                cardGroup.lookAt(0, yOffset * 0.1, 0);
                cardGroup.rotateY(Math.PI);

                cardGroup.userData = {
                    isClickable: true,
                    type: 'photo',
                    baseY: yOffset,
                    angle: angle,
                    radius: radius
                };

                this.interactiveGroup.add(cardGroup);
                this.clickableObjects.push(photoMesh, cardFrontMesh);
            });
        });

        // 3. CÁC CỤM TỪ LỜI CHÚC TRÔI NỔI THANH THOÁT
        const wishes = CONFIG.wishes;
        const wishRadius = isMobileView ? 74 : 85;
        wishes.forEach((wishText, i) => {
            const angle = (i / wishes.length) * Math.PI * 2 + 0.35;
            const y = ((i % 4) - 1.5) * 22 + (Math.sin(i * 1.5) * 4);

            const textTex = this.createNeonTextTexture(wishText);
            const planeGeo = new THREE.PlaneGeometry(isMobileView ? 24 : 32, isMobileView ? 6 : 8);
            const planeMat = new THREE.MeshBasicMaterial({
                map: textTex,
                transparent: true,
                side: THREE.DoubleSide
            });
            const textMesh = new THREE.Mesh(planeGeo, planeMat);

            const x = Math.cos(angle) * wishRadius;
            const z = Math.sin(angle) * wishRadius;
            textMesh.position.set(x, y, z);
            textMesh.lookAt(0, y, 0);
            textMesh.rotateY(Math.PI);

            textMesh.userData = {
                isClickable: true,
                type: 'wish',
                angle: angle,
                baseY: y,
                radius: wishRadius
            };

            this.interactiveGroup.add(textMesh);
            this.clickableObjects.push(textMesh);
        });

        // 4. TRÁI TIM NHỎ BAY LƠ LỬNG NHƯ BỤI TIÊN
        const heartCount = 18;
        const heartColors = [0xff85a1, 0xffa8ba, 0xff6584, 0xffd6a5];
        for (let h = 0; h < heartCount; h++) {
            const heartColor = heartColors[h % heartColors.length];
            const heartScale = isMobileView ? (0.4 + Math.random() * 0.3) : (0.55 + Math.random() * 0.4);
            const heart = this.createHeartMesh(heartColor, heartScale);

            const hRadius = (isMobileView ? 38 : 45) + Math.random() * (isMobileView ? 42 : 55);
            const hAngle = Math.random() * Math.PI * 2;
            const hy = (Math.random() - 0.5) * 60;

            heart.position.set(
                Math.cos(hAngle) * hRadius,
                hy,
                Math.sin(hAngle) * hRadius
            );

            heart.userData = {
                isClickable: true,
                type: 'heart',
                baseY: hy,
                angle: hAngle,
                radius: hRadius,
                rotSpeedX: 0.008 + Math.random() * 0.015,
                rotSpeedY: 0.008 + Math.random() * 0.015
            };

            this.interactiveGroup.add(heart);
            this.clickableObjects.push(heart);
        }
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

            this.targetRotationY += deltaX * 0.0045;
            this.targetRotationX += deltaY * 0.003;
            this.targetRotationX = Math.max(-0.6, Math.min(0.6, this.targetRotationX));

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
            this.targetCameraZ = Math.max(80, Math.min(260, this.targetCameraZ));
        };

        window.addEventListener('resize', () => {
            if (!this.camera || !this.renderer) return;
            const aspect = window.innerWidth / window.innerHeight;
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            const isMobile = aspect < 1;
            this.targetCameraZ = isMobile ? 180 : 130;
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

            if (this.specialHeart) {
                const beat = 1 + Math.sin(time * 3.5) * 0.12;
                this.specialHeart.scale.set(2.2 * beat, 2.2 * beat, 2.2 * beat);
                this.specialHeart.rotation.y += 0.015;
            }

            if (this.specialRing) {
                this.specialRing.rotation.z += 0.02;
            }

            this.interactiveGroup.children.forEach((child) => {
                if (child.userData && child.userData.baseY !== undefined) {
                    child.position.y = child.userData.baseY + Math.sin(time * 2 + child.userData.angle) * 3;

                    if (child.userData.type === 'heart') {
                        child.rotation.x += child.userData.rotSpeedX || 0.01;
                        child.rotation.y += child.userData.rotSpeedY || 0.01;
                    }
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
