"use stricts";

// HERO DATA
const heroData = [
	{
		name: "Abaddon",
		id: 102,
		primaryStat: "universal",
		primaryStatIcon:
			"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png",
		description: "SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS",
		shortHistory:
			"Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.",
		attackType: "melee",
		attackTypeIcon:
			"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg",
		complexity: 1,
		talentTree: {
			10: [
				"Aphotic Shield provides +15HP Regen",
				"-15% Curse of Avernus Movement Slow",
			],
			15: ["+40 Mist Coil Heal/Damage", "+80 Curse of Avernus DPS"],
			20: [
				"95 DPS Borrowed Time Immolation",
				"+100 Aphotic Shield Barrier Amount",
			],
			25: ["400 AoE Mist Coil", "-1 Curse of Avernus Attacks Required"],
		},
		abilities: [
			{
				icon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png",
				demoWebm:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm",
				demoMp4:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.mp4",
				poster:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.jpg",
				name: "Mist Coil",
				description:
					"Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
			},
			{
				icon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png",
				demoWebm:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.webm",
				demoMp4:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.mp4",
				poster:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.jpg",
				name: "Aphotic Shield",
				description:
					"Summons dark energies around an ally unit, creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.",
			},
			{
				icon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png",
				demoWebm:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.webm",
				demoMp4:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.mp4",
				poster:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.jpg",
				name: "Curse of Avernus",
				description:
					"Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4 times, they become affected by a chilling curse causing them to take damage over time, be silenced and slowed, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by 70%.",
			},
			{
				icon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png",
				demoWebm:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.webm",
				demoMp4:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.mp4",
				poster:
					"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.jpg",
				name: "Borrowed Time",
				description:
					"When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.",
			},
		],
		videoWebm:
			"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm",
		videoPoster:
			"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png",
	},
];

// ELEMENT/S
const heroCardEl = document.querySelector(".hero__card");
const mainEl = document.querySelector("main");

// EVENT LISTENER/S
heroCardEl.addEventListener("click", () => {
	const heroPreviewEl = document.createElement("section");
	mainEl.innerHTML = "";
	heroData.forEach((data) => {
		heroPreviewEl.innerHTML = `
  <section class="hero">
    <div class="hero__shadow"></div>
    <div class="hero__bg-gradient"></div>
    <div class="hero__vertical">
      <img src="${data.primaryStatIcon}" alt="${data.primaryStat}" />
      <p>${data.name}</p>
      <span>102</span>
      <div class="line"></div>
    </div>
    <div class="hero__summary">
      <div class="hero__type">
        <img src="${data.primaryStatIcon}" alt="${data.primaryStat}" />
        <p>${data.primaryStat}</p>
      </div>
      <p class="hero__summary-name">${data.name}</p>
      <p class="hero__summary-description">
        ${data.description}
      </p>
      <div class="hero__history">
        <p class="hero__history-short">
          ${data.shortHistory}
        </p>
        <p class="read-full-history">Read Full History</p>
      </div>
      <div class="hero__type-container">
        <p class="hero__type-title">Attack type</p>
        <div class="hero__type-detail">
          <img src="${data.attackTypeIcon}" alt="${data.attackType}" />
          <p class="hero__type-attack">${data.attackType}</p>
        </div>
      </div>
      <div class="hero__complexity-container">
        <p class="hero__complexity-title">Complexity</p>
        <div class="hero__complexity-ratings">
          <div class="hero__complexity-rate ${
						data.complexity === 1 ? "rate-filled" : ""
					}"></div>
          <div class="hero__complexity-rate ${
						data.complexity > 1 && data.complexity === 2 ? "rate-filled" : ""
					}"></div>
          <div class="hero__complexity-rate ${
						data.complexity === 1 && data.complexity === 3 ? "rate-filled" : ""
					}"></div>
        </div>
      </div>
    </div>
    <div class="hero__video-container">
      <video
        src="${data.videoWebm}"
        preload="auto"
        autoplay
        loop
        playsinline
        muted
      >
        <source
          type="media/webm"
          src="${data.videoWebm}"
        />
        <img src="${data.videoPoster}" />
      </video>
    </div>
    <div class="hero__ability-container">
      <p class="hero__ability-heading">Abilities</p>
      <div class="hero__ability-list">
        <div class="top__ability-container">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg" alt="talent tree" />
          <div class="ability__tooltip-container ability__talent">
            <div class="ability__tooltip ability__tooltip-talent">
              <div class="inner-container">
                <p class="component-title">Talent Tree</p>
                <div class="talent">
                  <p class="talent-text">${data.talentTree[25][0]}</p>
                  <div class="talent-level">
                    <p class="level">25</p>
                  </div>
                  <p class="talent-text">
                    ${data.talentTree[25][1]}
                  </p>
                </div>
                <div class="talent">
                  <p class="talent-text">${data.talentTree[20][0]}</p>
                  <div class="talent-level">
                    <p class="level">20</p>
                  </div>
                  <p class="talent-text">
                  ${data.talentTree[20][1]}
                  </p>
                </div>
                <div class="talent">
                  <p class="talent-text">${data.talentTree[15][0]}</p>
                  <div class="talent-level">
                    <p class="level">15</p>
                  </div>
                  <p class="talent-text">${data.talentTree[15][1]}</p>
                </div>
                <div class="talent">
                  <p class="talent-text">
                  ${data.talentTree[10][0]}
                  </p>
                  <div class="talent-level">
                    <p class="level">10</p>
                  </div>
                  <p class="talent-text">
                  ${data.talentTree[10][1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="top__ability-container">
          <img
            src="${data.abilities[0].icon}"
            alt="Ability image"
            class="ability-img"
          />
          <div class="ability__tooltip-container">
            <div class="ability__tooltip">
              <div class="ability-video-container">
                <video
                  src="${data.abilities[0].demoWebm}"
                  autoplay
                  preload="auto"
                  loop
                  playsinline
                  muted
                >
                  <source
                    type="video/webm"
                    src="${data.abilities[0].demoWebm}"
                    />
                  <source
                    type="video/mp4"
                    src="${data.abilities[0].demoMp4}"
                    />
                  <img
                    src="${data.abilities[0].poster}"
                    alt="Hero ability video poster"
                  />
                </video>
              </div>
              <div class="ability__description-container">
                <p class="ability__name">${data.abilities[0].name}</p>
                <p class="ability__description">
                  ${data.abilities[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top__ability-container">
          <img
            src="${data.abilities[1].icon}"
            alt="Ability image"
            class="ability-img"
          />
          <div class="ability__tooltip-container">
            <div class="ability__tooltip">
              <div class="ability-video-container">
                <video
                  src="${data.abilities[1].demoWebm}"
                  autoplay
                  preload="auto"
                  loop
                  playsinline
                  muted
                >
                  <source
                    type="video/webm"
                    src="${data.abilities[1].demoWebm}"
                    />
                  <source
                    type="video/mp4"
                    src="${data.abilities[1].demoMp4}"
                    />
                  <img
                    src="${data.abilities[1].poster}"
                    alt="Hero ability video poster"
                  />
                </video>
              </div>
              <div class="ability__description-container">
                <p class="ability__name">${data.abilities[1].name}</p>
                <p class="ability__description">
                  ${data.abilities[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top__ability-container">
          <img
            src="${data.abilities[2].icon}"
            alt="Ability image"
            class="ability-img"
          />
          <div class="ability__tooltip-container">
            <div class="ability__tooltip">
              <div class="ability-video-container">
                <video
                  src="${data.abilities[2].demoWebm}"
                  autoplay
                  preload="auto"
                  loop
                  playsinline
                  muted
                >
                  <source
                    type="video/webm"
                    src="${data.abilities[2].demoWebm}"
                    />
                  <source
                    type="video/mp4"
                    src="${data.abilities[2].demoMp4}"
                    />
                  <img
                    src="${data.abilities[2].poster}"
                    alt="Hero ability video poster"
                  />
                </video>
              </div>
              <div class="ability__description-container">
                <p class="ability__name">${data.abilities[2].name}</p>
                <p class="ability__description">
                  ${data.abilities[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top__ability-container">
          <img
            src="${data.abilities[3].icon}"
            alt="Ability image"
            class="ability-img"
          />
          <div class="ability__tooltip-container">
            <div class="ability__tooltip">
              <div class="ability-video-container">
                <video
                  src="${data.abilities[3].demoWebm}"
                  autoplay
                  preload="auto"
                  loop
                  playsinline
                  muted
                >
                  <source
                    type="video/webm"
                    src="${data.abilities[3].demoWebm}"
                    />
                  <source
                    type="video/mp4"
                    src="${data.abilities[3].demoMp4}"
                    />
                  <img
                    src="${data.abilities[3].poster}"
                    alt="Hero ability video poster"
                  />
                </video>
              </div>
              <div class="ability__description-container">
                <p class="ability__name">${data.abilities[3].name}</p>
                <p class="ability__description">
                  ${data.abilities[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
		/>`;
	});
	console.log(heroPreviewEl);
	mainEl.appendChild(heroPreviewEl);
});
