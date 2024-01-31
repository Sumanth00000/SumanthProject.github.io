import LanguageContext from '../../context/LanguageContext'

import './index.css'

const langOptions = [
  {id: 1, value: 'EN', language: 'English'},
  {id: 2, value: 'HI', language: 'हिंदी'},
  {id: 3, value: 'TE', language: 'తెలుగు'},
  {id: 4, value: 'ML', language: 'മലയാളം'},
  {id: 5, value: 'TA', language: 'தமிழ்'},
  {id: 6, value: 'KA', language: 'ಕನ್ನಡ'},
]

const Header = () => (
  <LanguageContext.Consumer>
    {value => {
      const {activeLanguage, changeLanguage} = value
      const onChangeLanguage = event => {
        changeLanguage(event.target.value)
      }

      return (
        <nav className="nav-header">
          <select
            className="language-dropdown"
            value={activeLanguage}
            onChange={onChangeLanguage}
          >
            {langOptions.map(eachOption => (
              <option key={eachOption.id} value={eachOption.value}>
                {eachOption.language}
              </option>
            ))}
          </select>
        </nav>
      )
    }}
  </LanguageContext.Consumer>
)

export default Header
