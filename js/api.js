async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/J4uMM/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}