function updateProfileInfo(profileData) {


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const profile = document.getElementById('profile.job')
    profile.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const wpp = document.getElementById('profile.wpp')
    wpp.innerText = profileData.wpp
    wpp.href = `tel:${profileData.wpp}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')

}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updateProjetos(profileData) {
    const projetos = document.getElementById('profile.projetos')
    projetos.innerHTML = profileData.projetos.map(project => {
        return `
            <li>
                <h3 ${project.git ? 'class="title git"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.periodo}</p>
                <p>${experience.descricao}</p>
            </li>
        `
    }).join('')
}








(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjetos(profileData)
    updateProfessionalExperience(profileData)
})()