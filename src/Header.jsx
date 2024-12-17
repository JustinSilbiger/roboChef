import chefClaude from './images/chef-claude-icon.png'

export default function Header() {
  return (
    <header className="header">
        <img src={chefClaude} className="chef-claude-icon" alt="Chef Claude Icon" />
        <h1>Chef Claude</h1>
    </header>
  );
}
