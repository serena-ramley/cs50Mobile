/* React is easily componentized
 * Breaking a complex problem into discrete components
 * Good for:
 * - consistency
 * - iteration speed
 * React's declarative nature makes it easy to customize components
*/

const slides = [
    {
        title: 'React',
        bullets: [
            'Bullet 1',
            'Bullet 2',
            'Bullet 3'
        ]
    },
    {
        title: 'React is Declarative',
        bullets: [
            'Bullet A',
            'Bullet B',
            'Bullet C'
        ]
    },
    {
        title: 'React is Easily Componentized',
        bullets: [
            'Bullet x',
            'Bullet y',
            'Bullet z'
        ]
    }
]

// TODO implement slideshow
const slideShow = (
    <div>
        {slides.map(slide => <Slide slide={slide} />)}
    </div>
)

const Slide = slide => (
    <div>
        <h1>{slide.title}</h1>
        <ul>
            {slide.bullets.map(bullet => <li>{bullet}</li>)}
        </ul>
    </div>
)