class Todo {
    constructor(configuration) {
        this.text = configuration.text || 'New TODO'
        this.checked = false
    }

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.checked} />
                <span>{this.text}</span>
            </li>
        )
    }
}

// React allows us to write declarative views that "react" to changes in data
// Allows us to abstract complex problems into smaller components
// Allows us to write simple code that is still performant

/* Imperative vs Declarative
 * How vs What
 * Imperative programming outlines a series of steps to get to what you want
 * - JavaScript is imperative
 * Declarative programming just declares what you want
 * - HTML is declarative
*/