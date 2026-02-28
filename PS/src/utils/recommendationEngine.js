export function recommendGames(user, games) {
  return games.map(game => {
    let score = 0;

    // Genre similarity
    game.genres?.forEach(g => {
      if (user.favoriteGenres.includes(g.name.toLowerCase())) {
        score += 30;
      }
    });

    // Multiplayer preference boost
    if (
      user.multiplayerPreference &&
      game.tags?.some(tag => tag.name === "Multiplayer")
    ) {
      score += 20;
    }

    // Rating weight
    score += (game.rating || 0) * 10;

    return { ...game, score };
  })
  .sort((a, b) => b.score - a.score);
}