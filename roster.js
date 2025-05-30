document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid');

    const render = list => {
        grid.innerHTML = '';
        list.forEach((p, index) => {
            const col = document.createElement('div');
            col.className = 'col-6 col-lg-2';

            col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
            <div class="card-body text-center">
              <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
              <div class="badge badge-position badge-pos-${p.position}">${p.position}</div>
              <p class="small text-muted mb-0">Age ${p.age}</p>
              <button class="btn btn-sm show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
                More Info
              </button>
            </div>
          </div>
        `;
            grid.appendChild(col);
        });
    };

    grid.addEventListener('click', function (e) {
        if (e.target.classList.contains('show-info-btn')) {
            const index = parseInt(e.target.getAttribute('data-player-index')); // Convert to number
            const player = players[index];
            showPlayerModal(player);
        }
    });

    function showPlayerModal(player) {
        // Set modal title
        document.getElementById('modalTitle').textContent = `${player.firstName} ${player.lastName}`;

        // Set modal body with facts (as a list)
        const factsContainer = document.getElementById('modalFacts');
        factsContainer.innerHTML = '<ul>' + player.Facts.map(fact => `<li>${fact}</li>`).join('') + '</ul>';
    }
    render(players);
});