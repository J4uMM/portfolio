async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/J4uMM/portfolio/main/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}