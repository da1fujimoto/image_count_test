import React from 'react';
import ghapi from './api/ghapi';

const App = () => {
  const [tree, setTree] = React.useState([]);
  const [cats, setCats] = React.useState([]);
  const [flowers, setFlowers] = React.useState([]);

  React.useEffect(() => {
    ghapi.get('').then(d => {
      setTree(d.data.tree);
      setCats(d.data.tree.filter(data => {
        return data.path.match(/^cat\//);
      }));
      setFlowers(d.data.tree.filter(data => {
        return data.path.match(/^flower\//);
      }));
    })
  }, []);

  // React.useEffect(() => {
  //   console.log(cats);
  // }, [cats])

  // React.useEffect(() => {
  //   console.log(flowers);
  // }, [flowers])

  // React.useEffect(() => {
  //   console.log(tree);
  // }, [tree]);
  
  return (
    <div className="App">
      <h1>GitHub File Count</h1>

      <h2>All Files: {tree.length}</h2>
      <h2>Cats: {cats.length}</h2>
      {cats.map(d => {
        return (
          <img src={'../'+d.path} alt={d.path} key={d.sha} width="480" height="240"/>
        )
      })}
      <h2>Flowers: {flowers.length}</h2>
      {flowers.map(d => {
        return (
          <img src={'../'+d.path} alt={d.path} key={d.sha} width="480" height="240"/>
        )
      })}
    </div>
  );
}

export default App;
