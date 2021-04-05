import React from 'react'

import './Organizations.css'

function Organizations() {
    return (
        <div className = 'organizations' >
            <div>
                <h1 className = 'organization__title'>
                Find speakers from these organizations
                </h1>
            </div>
            <div className = 'org__images' id = 'events'>

            <div className = 'org__imgone' >
                <img   src = 'https://speakerhub.com/profiles/speakerhub/themes/speakerhub_theme/assets/img/companies/tedx.png'></img>
            </div>
            <div  className = 'org__imgtwo'>
                <img src = 'https://speakerhub.com/profiles/speakerhub/themes/speakerhub_theme/assets/img/companies/google.png'></img>
            </div>
            <div className = 'org__imgtwo' >
                <img src = 'https://speakerhub.com/profiles/speakerhub/themes/speakerhub_theme/assets/img/companies/redhat.png'></img>
            </div>
            </div>

            <div className = 'org__imagestwo'>
                <div className = 'org__imgthree'>
                    <img src = 'https://speakerhub.com/profiles/speakerhub/themes/speakerhub_theme/assets/img/companies/uci.png'></img>
                </div>
                <div className = 'org__imgfour'>
                    <img src = 'https://speakerhub.com/profiles/speakerhub/themes/speakerhub_theme/assets/img/companies/cfa.png'></img>
                </div>
            </div>

        </div>
    )
}

export default Organizations
