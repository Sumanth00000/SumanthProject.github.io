import LanguageContext from '../../context/LanguageContext'

import './index.css'

const landingSectionContent = {
  EN: {
    heading: 'Rohit Sharma',
    description:
      'Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer who currently captains the India national cricket team across all formats. He is a right-handed batsman. Considered one of the best batsmen of his generation and one of the greatest opening batters of all time, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills. Sharma holds several batting records which famously includes most double centuries in ODI cricket , most centuries at Cricket World Cups (7) and most hundreds in Twenty20 Internationals (5). Rohit Sharma is the first player to score 5 T20I centuries. He plays for Mumbai Indians in IPL and for Mumbai in domestic cricket.',
  },
  HI: {
    heading: 'रोहित शर्मा',
    description:
      'रोहित गुरुनाथ शर्मा (जन्म 30 अप्रैल 1987) एक भारतीय अंतर्राष्ट्रीय क्रिकेटर हैं जो वर्तमान में सभी प्रारूपों में भारत की राष्ट्रीय क्रिकेट टीम के कप्तान हैं। वह दाएं हाथ के बल्लेबाज हैं. अपनी पीढ़ी के सर्वश्रेष्ठ बल्लेबाजों में से एक और सभी समय के महानतम सलामी बल्लेबाजों में से एक माने जाने वाले शर्मा को उनकी टाइमिंग, सुंदरता, छक्के मारने की क्षमता और नेतृत्व कौशल के लिए जाना जाता है। शर्मा के पास कई बल्लेबाजी रिकॉर्ड हैं जिनमें वनडे क्रिकेट में सर्वाधिक दोहरे शतक, क्रिक में सर्वाधिक शतक शामिल हैं',
  },
  TE: {
    heading: 'రోహిత్ శర్మ',
    description:
      'రోహిత్ గురునాథ్ శర్మ (జననం 30 ఏప్రిల్ 1987) ప్రస్తుతం అన్ని ఫార్మాట్లలో భారత జాతీయ క్రికెట్ జట్టుకు కెప్టెన్‌గా ఉన్న ఒక భారతీయ అంతర్జాతీయ క్రికెటర్. అతను కుడిచేతి వాటం బ్యాట్స్‌మెన్. అతని తరంలోని అత్యుత్తమ బ్యాట్స్‌మెన్‌లలో ఒకరిగా మరియు ఎప్పటికప్పుడు గొప్ప ఓపెనింగ్ బ్యాటర్‌లలో ఒకరిగా పరిగణించబడుతున్న శర్మ, అతని టైమింగ్, గాంభీర్యం, సిక్స్ కొట్టే సామర్ధ్యాలు మరియు నాయకత్వ నైపుణ్యాలకు ప్రసిద్ధి చెందాడు. శర్మ ODI క్రికెట్‌లో అత్యధిక డబుల్ సెంచరీలు, క్రిక్ వద్ద అత్యధిక సెంచరీలు చేసిన అనేక బ్యాటింగ్ రికార్డులను కలిగి ఉన్నాడు.',
  },
  ML: {
    heading: 'രോഹിത് ശർമ്മ',
    description:
      'രോഹിത് ഗുരുനാഥ് ശർമ്മ (ജനനം: 30 ഏപ്രിൽ 1987) ഒരു ഇന്ത്യൻ അന്താരാഷ്ട്ര ക്രിക്കറ്റ് കളിക്കാരനാണ്, നിലവിൽ എല്ലാ ഫോർമാറ്റുകളിലും ഇന്ത്യൻ ദേശീയ ക്രിക്കറ്റ് ടീമിൻ്റെ ക്യാപ്റ്റനാണ്. വലംകൈയ്യൻ ബാറ്റ്സ്മാനാണ്. തൻ്റെ തലമുറയിലെ ഏറ്റവും മികച്ച ബാറ്റ്‌സ്മാൻമാരിൽ ഒരാളായും എക്കാലത്തെയും മികച്ച ഓപ്പണിംഗ് ബാറ്റ്‌സ്മാന്മാരിലൊരാളായും കണക്കാക്കപ്പെടുന്ന ശർമ്മ തൻ്റെ ടൈമിംഗ്, ചാരുത, സിക്‌സ് അടിക്കുന്ന കഴിവുകൾ, നേതൃത്വ പാടവം എന്നിവയ്ക്ക് പേരുകേട്ടതാണ്. ഏകദിന ക്രിക്കറ്റിൽ ഏറ്റവും കൂടുതൽ ഡബിൾ സെഞ്ച്വറികൾ, ക്രിക്കിൽ ഏറ്റവും കൂടുതൽ സെഞ്ചുറികൾ എന്നിങ്ങനെ നിരവധി ബാറ്റിംഗ് റെക്കോർഡുകൾ ശർമ്മയുടെ പേരിലാണ്.',
  },
  TA: {
    heading: 'ரோஹித் சர்மா',
    description:
      'ரோஹித் குருநாத் சர்மா (பிறப்பு: ஏப்ரல் 30, 1987) ஒரு இந்திய சர்வதேச கிரிக்கெட் வீரர் ஆவார், அவர் தற்போது அனைத்து வடிவங்களிலும் இந்திய தேசிய கிரிக்கெட் அணிக்கு கேப்டனாக உள்ளார். அவர் ஒரு வலது கை பேட்ஸ்மேன். அவரது தலைமுறையின் சிறந்த பேட்ஸ்மேன்களில் ஒருவராகவும், எல்லா காலத்திலும் மிகச்சிறந்த தொடக்க பேட்ஸ்மேன்களில் ஒருவராகவும் கருதப்படும் ஷர்மா, அவரது டைமிங், நேர்த்தி, சிக்ஸர் அடிக்கும் திறன்கள் மற்றும் தலைமைத்துவ திறன் ஆகியவற்றிற்காக அறியப்படுகிறார். சர்வதேச ஒருநாள் கிரிக்கெட்டில் அதிக இரட்டை சதங்கள், கிரிக்கில் அதிக சதங்கள் என பல பேட்டிங் சாதனைகளை சர்மா பெற்றுள்ளார்.',
  },
  KA: {
    heading: 'ರೋಹಿತ್ ಶರ್ಮಾ',
    description:
      'ರೋಹಿತ್ ಗುರುನಾಥ್ ಶರ್ಮಾ (ಜನನ 30 ಏಪ್ರಿಲ್ 1987) ಒಬ್ಬ ಭಾರತೀಯ ಅಂತರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟಿಗ, ಅವರು ಪ್ರಸ್ತುತ ಎಲ್ಲಾ ಸ್ವರೂಪಗಳಲ್ಲಿ ಭಾರತ ರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟ್ ತಂಡದ ನಾಯಕರಾಗಿದ್ದಾರೆ. ಅವರು ಬಲಗೈ ಬ್ಯಾಟ್ಸ್‌ಮನ್. ಅವರ ಪೀಳಿಗೆಯ ಅತ್ಯುತ್ತಮ ಬ್ಯಾಟ್ಸ್‌ಮನ್‌ಗಳಲ್ಲಿ ಒಬ್ಬರು ಮತ್ತು ಸಾರ್ವಕಾಲಿಕ ಶ್ರೇಷ್ಠ ಆರಂಭಿಕ ಬ್ಯಾಟರ್‌ಗಳಲ್ಲಿ ಒಬ್ಬರೆಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟ ಶರ್ಮಾ ಅವರ ಸಮಯ, ಸೊಬಗು, ಸಿಕ್ಸ್-ಹೊಡೆಯುವ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ನಾಯಕತ್ವದ ಕೌಶಲ್ಯಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ. ಶರ್ಮಾ ಹಲವಾರು ಬ್ಯಾಟಿಂಗ್ ದಾಖಲೆಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ, ಇದರಲ್ಲಿ ODI ಕ್ರಿಕೆಟ್‌ನಲ್ಲಿ ಹೆಚ್ಚು ದ್ವಿಶತಕಗಳು, ಕ್ರಿಕ್‌ನಲ್ಲಿ ಹೆಚ್ಚಿನ ಶತಕಗಳು ಸೇರಿವೆ',
  },
}

const LandingSection = () => {
  const getLandingSectionData = activeLanguage => {
    switch (activeLanguage) {
      case 'EN':
        return landingSectionContent.EN
      case 'HI':
        return landingSectionContent.HI
      case 'TE':
        return landingSectionContent.TE
      case 'ML':
        return landingSectionContent.ML
      case 'TA':
        return landingSectionContent.TA
      case 'KA':
        return landingSectionContent.KA
      default:
        return null
    }
  }
  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage} = value
        const {heading, description} = getLandingSectionData(activeLanguage)
        return (
          <div className="bg-container">
            <div className="responsive-container">
              <div className="description-container">
                <h1 className="heading">{heading}</h1>
                <p className="description">{description}</p>
              </div>
              <img
                className="logo-white"
                src="https://www.hindustantimes.com/ht-img/img/2023/09/04/550x309/CRICKET-ASIA-2023-IND-NEP-ODI-30_1693861868874_1693861933290.jpg"
                alt="windows logo"
              />
            </div>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default LandingSection
