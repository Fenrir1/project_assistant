
export default class AssistantService {

    data = {
        posts: [
            { id: 1, 
                title: 'Failure is simply the opportunity to begin again, this time more intelligently.',
                text: '<p>What if a surgeon or patient could train or prepare for a complex procedure by simulating it first in a 360-degree, 3D simulation? What if a patient could put aside the pamphlet and actually see the impact a diet would have on his or her future appearance? What if impaired mobility patients could experience brain- and coordination-building activities in complete safety?</p><p>Immersive "digital reality" tools such as augmented reality (AR) and virtual reality (VR) are making these scenarios increasingly realistic. As with many earlier technology waves, VR and AR got an early boost from frivolous uses and are graduating to more constructive roles. Barriers to technology, cost, and content are beginning to fall, and early adopters are already hard at work.</p>',
                author: 1,
                isPublished: true,
                image: null
        
            },
            { id: 2, 
                title: 'We did it!',
                text: '<p>Combining technological innovation, entrepreneurship, and rapid growth, the Fast 500 companies—both large and small, public and private—lead and transform the way we do business today.</p>',
                author: 4,
                isPublished: true,
                image: '/Assets/Happy-Business-Computer-People-1.png'
        
            },
            { id: 3, 
                title: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
                text: 'Third post text',
                author: 3,
                isPublished: true,
                image: null
        
            },
            { id: 4, 
                title: '<div class="clearfix" ><img src="/Assets/Group 21.png" class="float-left post-inner-img" alt="chart" /><span class="post-inner-title"><span class="big-blue" >60</span>% cases</span><span>completed ahead of schedule</span></div><span class="post-inner-subtitle"><span class="normal-red" >21%</span> worse than last week</span>',
                text: '60% cases',
                author: 2,
                isPublished: true,
                image: null
        
            },
            { id: 5, 
                title: 'If everyone is moving forward together, then success takes care of itself.',
                text: 'sample text',
                author: 2,
                isPublished: false,
                image: null
        
            },
            { id: 6, 
                title: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
                text: 'sample text',
                author: 3,
                isPublished: false,
                image: null
        
            },
            { id: 7, 
                title: 'We did it again! ',
                text: 'sample text',
                author: 4,
                isPublished: false,
                image: '/Assets/group-of-business-partners-800x533.png'
        
            }
        ],
        projects: [          
            {
                id: 1,
                name: 'Alpha project',
                company: 'Inceptos Hymenaeos Ltd',
                status: 52,
                releaseDate: 1573498800000,
            },
            {
                id: 2,
                name: 'Betha project',
                company: 'Nec Euismod In Company ',
                status: 23,
                releaseDate: 1575831600000,
            },
            {
                id: 3,
                name: 'Gamma project',
                company: 'Erat Volutpat',
                status: 25,
                releaseDate: 1577214000000,
            },
            {
                id: 4,
                name: 'Sigma project',
                company: 'Tellus Ltd',
                status: 48,
                releaseDate: 1574622000000,
            },
            {
                id: 5,
                name: 'Kappa project',
                company: 'Hymenaeos Ltd',
                status: 89,
                releaseDate: 1571511600000,
            },
            {
                id: 6,
                name: 'Omega project',
                company: 'Gessertinno Llc',
                status: 56,
                releaseDate: 1574362800000,
            },
            {
                id: 7,
                name: 'Tetha project',
                company: 'Umbralora Montro',
                status: 95,
                releaseDate: 1571166000000,
            },
            {
                id: 8,
                name: 'Epsilon project',
                company: 'Poprisi Company',
                status: 85,
                releaseDate: 1571943600000,
            },
            {
                id: 9,
                name: 'Delta project',
                company: 'Fergana Trast Nationale',
                status: 75,
                releaseDate: 1572548400000,
            }
        ],
        staff: [
            {
                id: 1,
                name: 'Sierra Ferguson',
                role: 'TPM',
                photo: '/Assets/face00001.png'
            },
            {
                id: 2,
                name: 'Glen Moore',
                role: 'Head of Statistics',
                photo: '/Assets/face00002.png'
            },
            {
                id: 3,
                name: 'George Fields',
                role: 'Head of QA dept.',
                photo: '/Assets/face00003.png'
            },
            {
                id: 4,
                name: 'Lina Lake',
                role: 'Head of manager dept.',
                photo: '/Assets/face00004.png'
            }
        ],
        isEditModeActive: false
      
    };


    getProjects() {
        return this.data.projects;
    }
    getStaff() {
        return this.data.staff;
    }
    getPosts() {
        return this.data.posts;
    }
  
     
  
  }