import React from 'react';
import './App.css'; 
const tovarasi = [
    { 
        name: `MiTRO`, 
        title: `ARTiST CAND ViNE VORBA DE COD`, 
        desc: `DORiT Si CAUTAT DE TOATE TELEViZiUNiLE ROMANESTi`, 
        img: `/mitro.jpg`, 
    },
    { 
        name: `HoTz`, 
        title: `DiSTRUGATORUL DE ViRGiNE`, 
        desc: `„Alooo, șmecherilor cu toc! Stați sub sandalele femeilor și faceți cum vor ele! Nu uitați, se schimbă președintele țării… da’ o femeie! Și, dacă tot e la modă, nu uitați să vă schimbați și voi sexul! 😂 gândiți cu capul vostru nu cu sandalele ei😂`, 
        img: '/hotz.jpg', 
    },
    { 
        name: `OTTWAY`, 
        title: `LORD OF DRUGS`, 
        desc: `Fame is the echo of your name in the streets, but true power is the silence that falls when you enter the room. I don't sell a substance, I sell the momentary escape and for that escape, the world will pay any price`, 
        img: `/ottway.jpg`, 
    },
    { 
        name: `DRAVEN`, 
        title: `REGELE LiTORALULUi`, 
        desc: `Leul e leu si in jungla si in cusca...inca putin...`, 
        img: `/draven.jpg`, 
    },
    { 
        name: `RUUK`, 
        title: `ZiS Si CASiAN`, 
        desc: `vorbiti ma de bine fetelor ca tot rau o duc`, 
        img: `/ruuk.jpg`, 
    },
    { 
        name: `KRAKEN`, 
        title: `iNViEREA LUi KiNG VON`, 
        desc: `L-A INViAT PE KiNG VON DiN MORMANT`, 
        img: `/kraken.jpg`, 
    },
    { 
        name: `CORBELUSi`, 
        title: `F10 OWNER`, 
        desc: `The BMW is just a fast way to get to the top, but the power is in knowing you can park it anywhere you want. Fame is measured by the roar of the engine as you drive away from the chaos you created.`, 
        img: `/corbelusi.jpg`, 
    },
    { 
        name: `MAMACU`, 
        title: `PROFi OWNER`, 
        desc: `I might not be the President, but Profi Romania knows my status and value, Profi CEO.`, 
        img: `/mamacu.jpg`, 
    },
    { 
        name: `CZ`, 
        title: `30 DE ANi DE PUSCARiE`, 
        desc: `Aici imi dadea drumu De la parnaie Eram suparat Ca numai scapa nimeni sapunu`, 
        img: `/cz.jpg`, 
    },

      { 
        name: `PAUL`, 
        title: `BEBiNO BROTHER`, 
        desc: `Cu toate dovezile în faţă eu sunt de 10 luni arestat la domiciliu şi nu mi se acordă nicio şansă. În acest moment sunt în arest pe baza unor declaraţii în acest dosar: declaraţia lui Cezar, a lui Mohamed şi a lui Împuşcatu' Florin, care susţine că l-am tăiat eu.`, 
        img: `/paul.jpg`, 
    },

   { 
        name: `CLARK`, 
        title: `RUUK'S BROTHER`, 
        desc: `sunt fanul lui ruuk666 cel nascut in belmont 187th street.`, 
        img: `/clark.png`, 
    },

    { 
        name: `DARK4MOON`, 
        title: `CAPO Di AZTECAS`, 
        desc: `Am avut lider peste tot an orice clan mafiot`, 
        img: `/dark4moon.png`, 
    },
    { 
        name: `ARMANDO`, 
        title: `SEFUL FEMEiLOR`, 
        desc: `Atata timp cat am cutitu in mana tai si roboti 🏆`, 
        img: `/armando.png`, 
    },
];

const BackgroundMusic = () => {
    const audioFilePath = `/zpd.mp3`; 

    const [isMuted, setIsMuted] = React.useState(true);
    const audioRef = React.useRef(null);

    const handleFirstInteraction = () => {
        if (isMuted && audioRef.current) {
            audioRef.current.muted = false; 
            audioRef.current.play().catch(e => console.error("Redarea audio a eșuat:", e));
            setIsMuted(false);
            
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
        }
    };

    React.useEffect(() => {
        if (isMuted) {
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('scroll', handleFirstInteraction); 
        }
        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
        };
    }, [isMuted]);

    return (
        <React.Fragment>
            <audio 
                ref={audioRef} 
                autoPlay 
                loop 
                muted={isMuted} 
                src={audioFilePath} 
            />

            <div style={{
                position: 'fixed', bottom: '15px', right: '15px', zIndex: 100, 
                color: isMuted ? '#ffc107' : '#10b981', 
                fontSize: '1.2em', cursor: 'default', padding: '10px', 
                backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px',
            }}>
                {isMuted ? (
                    <span>Z  P  D</span>
                ) : (
                    <span>ZAPADA ABOVE ALL</span>
                )}
            </div>
        </React.Fragment>
    );
};

function App() {
    
    const [hoveredCard, setHoveredCard] = React.useState(null);

    const styles = {
        app: {
            minHeight: '100vh',
            backgroundColor: '#0d0d0d', 
            color: '#f0f0f0',
            fontFamily: 'Impact, Arial, sans-serif', 
            paddingBottom: '50px',
            backgroundImage: 'linear-gradient(90deg, rgba(255,193,7,0.1) 0%, rgba(13,13,13,1) 10%, rgba(13,13,13,1) 90%, rgba(255,193,7,0.1) 100%)'
        },
        headerTitle: {
            textAlign: 'center',
            paddingTop: '50px',
            fontSize: '3.5em', 
            color: '#ffc107', 
            marginBottom: '40px',
            textTransform: 'uppercase',
            letterSpacing: '5px', 
        },
        titleHighlight: {
            color: '#ffffff', 
        },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '50px 30px', 
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '20px',
            justifyContent: 'center',
        },
        cardWrapper: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s',
            cursor: 'pointer',
        },
        cardWrapperHover: {
            transform: 'scale(1.05)',
        },
        cardImageContainer: {
            width: '250px', 
            height: '250px',
            borderRadius: '50%', 
            overflow: 'hidden',
            margin: '0 auto 20px',
            border: '5px solid #1a1a1a', 
            boxShadow: '0 0 0 5px rgba(255,193,7,0.1)', 
            transition: 'box-shadow 0.3s',
        },
        cardImageContainerHover: {
            boxShadow: '0 0 0 5px #ffc107, 0 0 20px rgba(255, 193, 7, 0.8)', 
        },
        getImgStyle: (name) => ({
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: hoveredCard === name ? 'grayscale(0%)' : 'grayscale(100%)', 
            transition: 'filter 0.5s',
        }),
        nameTag: {
            fontSize: '1.2em',
            color: '#ffffff',
            backgroundColor: '#ffc107',
            padding: '5px 10px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            display: 'inline-block',
            margin: '5px 0',
        },
        cardDescription: {
            color: '#ccc',
            fontStyle: 'italic',
            fontSize: '0.9em',
            maxWidth: '300px',
            margin: '10px auto 0',
        }
    };


    return (
        <div style={styles.app}>
            <h1 style={styles.headerTitle} className="animated-title">
                ZAPADA <span style={styles.titleHighlight}>TEAM</span>
            </h1>
            
            <div style={styles.cardContainer}>
                {tovarasi.map((t) => (
                    <div 
                        key={t.name}
                        style={{...styles.cardWrapper, ...(hoveredCard === t.name ? styles.cardWrapperHover : {})}}
                        onMouseEnter={() => setHoveredCard(t.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div
                            style={{...styles.cardImageContainer, ...(hoveredCard === t.name ? styles.cardImageContainerHover : {})}}
                        >
                            <img 
                                src={t.img} 
                                alt={`Profile of ${t.name}`} 
                                style={styles.getImgStyle(t.name)}
                            />
                        </div>
                        
                        <div>
                            <p style={{marginBottom: 0}}>
                                <span style={styles.nameTag}>{t.name.toUpperCase()}</span> 
                            </p>
                            
                            <p style={{fontSize: '1.2em', color: '#ffc107', marginTop: '10px', fontWeight: 'bold'}}>{t.title.toUpperCase()}</p>

                            <p style={styles.cardDescription}>{t.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <BackgroundMusic />
            
            <div style={{textAlign: 'center', marginTop: '50px', color: '#666', fontSize: '0.8em'}}>
                <p>SPONSORED BY <span style={styles.titleHighlight}>ZAPADA TEAM - DEVELOPED BY MITRO - 2026</span></p>
            </div>
        </div>
    );
}

export default App;