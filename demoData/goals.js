export const createDemoGoals = () => {
    let id = 0

    const goals = [
        {
            name: 'Wash dishes',
            due: '01-12-2019'
        },
        {
            name: 'Vacuum the floor',
            due: '20-10-2019'
        },
        {
            name: 'Wash my hands after toilet for once',
            due: '31-12-2020'
        },
    ].map(item => ({
        id: id++,
        ...item
    }))

    return goals
}
