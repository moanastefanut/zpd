import React from 'react';
const tovarasi = [

      { 
        name: `MiTRO THE DEVELOPER`, 
        title: `ZiS Si ANTiFiLET`, 
        desc: `ORiCAT DE GREU V AR Fi iN ViATA NU VA UMBLATi LA BORCANUL CU DULCEATA`, 
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
        desc: `FUT CEL MAI BiNE DE PE PLANETA`, 
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
    const videoId = `w5dRIlpFsdM`; 
    const embedUrl = `https://www.youtube.com/embed/w5dRIlpFsdM?si=jXpTTqF6intgPmuG`;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '1px', 
            height: '1px', 
            overflow: 'hidden',
            zIndex: -1, 
        }}>
            <iframe 
                width="1" 
                height="1" 
                src={embedUrl}
                title="Z A P A D A" 
                frameBorder="0" 
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

function App() {
    
    const [hoveredCard, setHoveredCard] = React.useState(null);

    const styles = {
        app: {
            minHeight: '100vh',
            backgroundColor: '#0d0d0d', 
            color: '#f0f0f0',
            fontFamily: 'Arial, sans-serif',
            paddingBottom: '50px',
        },
        headerTitle: {
            textAlign: 'center',
            paddingTop: '50px',
            fontSize: '2.5em',
            color: '#ffffff',
            marginBottom: '40px',
            textTransform: 'uppercase',
        },
        titleHighlight: {
            color: '#ffffff', 
        },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '20px',
        },
        getCardStyle: (name) => ({
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            transform: hoveredCard === name ? 'translateY(-5px)' : 'none',
            boxShadow: hoveredCard === name ? '0 6px 15px rgba(255, 193, 7, 0.5)' : '0 4px 10px rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
        }),
        cardContent: {
            padding: '15px',
            textAlign: 'center',
        },
        cardTitle: {
            fontSize: '1.5em',
            color: '#ffc107',
            marginBottom: '5px',
        },
        cardDescription: {
            color: '#999',
            fontStyle: 'italic',
        },
        getImgStyle: (name) => ({
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            filter: hoveredCard === name ? 'grayscale(0%)' : 'grayscale(100%)', 
            transition: 'filter 0.5s',
            borderBottom: hoveredCard === name ? '4px solid #ffc107' : 'none',
        })
    };


    return (
        <div style={styles.app}>
            <h1 style={styles.headerTitle}>
                ZAPADA <span style={styles.titleHighlight}>TEAM</span>
            </h1>
            
            <div style={styles.cardContainer}>
                {tovarasi.map((t) => (
                    <div 
                        key={t.name}
                        style={styles.getCardStyle(t.name)}
                        onMouseEnter={() => setHoveredCard(t.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <img 
                            src={t.img} 
                            alt={`Profile of ${t.name}`} 
                            style={styles.getImgStyle(t.name)}
                        />
                        <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>{t.name.toUpperCase()} <span style={{color: '#fff'}}>&times;</span> {t.title.toUpperCase()}</h2>
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