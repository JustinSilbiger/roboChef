import Markdown from 'react-markdown'


export default function ClaudeRecipe(props) {
    return (
        <section className="generated-recipe-container" aria-live="polite">
            <h2 className="generated-recipe-title">Chef Claude Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}