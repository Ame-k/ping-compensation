/*
Note: If you can't find a specific skill on these list that probably means the preset file is outdated. 
To update it just delete it and restart proxy, let it update and it will be done.
If after following this process skills are still missing do report it on discord or an issue in github.
*/
module.exports = {
    0: { // Warrior
        "enabled": true,
        1: false, // Combo Attack
        2: false, // Evasive Roll
        3: false, // Torrent of Blows
        4: true, // Rain of Blows
        5: false, // Battle Cry
        8: false, // Assault Stance
        9: false, // Defensive Stance
        10: false, // Death From Above
        11: true, // Poison Blade
        12: false, // Leaping Strike
        13: false, // Retaliate
        16: false, // Charging Slash
        17: true, // Vortex Slash
        18: true, // Combative Strike
        19: true, // Rising Fury
        20: false, // Deadly Gamble
        21: false, // Cascade of Stuns
        22: true, // Backstab
        23: false, // Spinning Counter
        24: false, // Smoke Aggressor
        25: true, // Command: Attack
        26: true, // Command: Follow
        28: false, // Traverse Cut
        29: true, // Blade Draw
        30: true, // Scythe
        31: true, // Reaping Slash
        32: false, // Cross Parry
        34: true, // Binding Sword
        35: false, // Infuriate
        36: true, // Rain of Blows (Deadly Gamble)
        37: true, // Blade Draw (Deadly Gamble)
        38: true, // Scythe (Deadly Gamble)
        39: false, // Traverse Cut (Defensive Stance)
        // Awakening
        40: true, // Blade Waltz
        41: true, // Aerial Scythe
        42: true, // Blade Frenzy
     },
    1: { // Lancer
        "enabled": true,
        1: false, // Combo Attack
        2: false, // Stand Fast
        3: true, // Onslaught
        4: true, // Challenging Shout
        5: true, // Shield Bash
        7: false, // Guardian Shout
        8: true, // Shield Counter
        9: false, // Leash
        10: true, // Debilitate
        11: false, // Retaliate
        12: true, // Infuriate
        13: true, // Spring Attack
        15: false, // Charging Lunge
        16: false, // Second Wind
        17: false, // Adrenaline Rush
        18: true, // Shield Barrage
        19: false, // Pledge of Protection
        21: true, // Lockdown Blow
        22: false, // Iron Will
        23: false, // Master's Leash
        24: false, // Chained Leash
        25: true, // Wallop
        26: true, // Backstep
        27: true, // Rallying Cry
        // Awakening
        28: true, // Super Leap
        29: false, // Guardian's Barrier
        30: false, // Divine Protection
    },
    2: { // Slayer
        "enabled": false,
        1: false, // Combo Attack
        2: true, // Knockdown Strike
        3: true, // Whirlwind
        4: true, // Evasive Roll
        5: true, // Dash
        6: true, // Backstab
        8: true, // Overhand Strike
        9: true, // Leaping Strike
        10: true, // Retaliate
        12: true, // Heart Thrust
        13: true, // Stunning Backhand
        14: true, // Distant Blade
        15: true, // Startling Kick
        16: true, // Fury Strike
        17: true, // Headlong Rush
        18: true, // Overpower
        19: true, // Tenacity
        20: true, // In Cold Blood
        21: true, // Exhausting Blow
        23: true, // Measured Slice
        24: true, // Eviscerate
        25: true, // Ultimate Overhand Strike
        // Awakening
        26: true, // Punishing Blow
        27: true, // Savage Strike
        28: true, // Unsheathe
    },
    3: { // Berserker
        "enabled": true,
        1: false, // Combo Attack
        2: false, // Axe Block
        3: true, // Thunderstrike
        4: true, // Flatten
        5: false, // Dash
        6: true, // Sweeping Strike
        8: false, // Fiery Rage
        10: true, // Cyclone
        11: false, // Leaping Strike
        13: false, // Retaliate
        15: false, // Vampiric Blow (unstable emulation, enable it only if your ping >180)
        16: false, // Fearsome Shout
        18: true, // Lethal Strike
        19: false, // Triumphant Shout
        20: false, // Inescapable Doom
        21: false, // Bloodlust
        24: false, // Evasive Smash
        25: true, // Raze
        26: true, // Tackle
        27: false, // Unbreakable
        28: false, // Intimidation
        29: false, // Evasive Roll
        30: false, // Axe Counter
        31: true, // Overwhelm
        32: false, // Punishing Strike
        // Awakening
        33: false, // Unleash
        34: true, // Unleash: Dexter
        35: true, // Unleash: Sinister
        36: true, // Unleash: Rampage
        37: false, // Unleash: Beast Fury
    },
    4: { // Sorcerer
        "enabled": true,
        1: false, // Fireball
        2: true, // Frost Sphere
        3: true, // Lightning Trap
        4: true, // Arcane Pulse
        5: false, // Mana Infusion
        6: true, // Meteor Strike
        7: false, // Backstep
        8: true, // Flame Pillar
        10: false, // Mana Barrier
        11: true, // Lightning Strike
        12: true, // Void Pulse
        13: true, // Mindblast
        14: false, // Retaliate
        16: true, // Painblast
        17: true, // Painful Trap
        18: false, // Glacial Retreat
        19: true, // Mana Siphon
        20: false, // Flaming Barrage
        21: false, // Nerve Exhaustion
        22: true, // Burning Breath
        23: true, // Mana Volley
        25: true, // Time Gyre
        26: false, // Teleport Jaunt
        27: true, // Hailstorm
        30: true, // Nova
        31: false, // Warp Barrier
        32: true, // Meteor Shower
        33: false, // Arcane Pulse (Mana Boost)
        34: false, // Mana Boost
        // Awakening
        35: true, // Ice Lance
        36: true, // Fusion
        39: false, // Implosion
    },
    5: { // Archer
        "enabled": true,
        1: false, // Arrow
        2: true, // Arrow Volley
        3: true, // Radiant Arrow
        4: true, // Penetrating Arrow
        5: true, // Rain of Arrows
        6: true, // Backstep
        7: true, // Feign Death
        8: true, // Rapid Fire
        9: true, // Slow Trap
        10: true, // Stunning Trap
        12: true, // Velik's Mark
        14: true, // Retaliate
        15: true, // Incendiary Trap
        16: true, // Breakaway Bolt
        17: true, // Web Arrow
        18: true, // Close Quarters
        19: true, // Poison Arrow
        20: true, // Restraining Arrow
        22: true, // Sequential Fire
        23: true, // Stunning Trap Arrow
        25: true, // Incendiary Trap Arrow
        29: true, // Thunderbolt
        31: true, // Tenacity
        32: true, // Find Weakness
        33: true, // Chase
        // Awakening
        34: true, // Wind Walk
        35: true, // Windsong
        36: true, // Gust Arrow
    },
    6: { // Priest
        "enabled": true,
        1: false, // Divine Radiance
        2: true, // Regeneration Circle
        3: true, // Healing Circle
        5: true, // Blessing of Shakan
        6: true, // Arise
        8: true, // Mana Infusion
        10: true, // Purifying Circle
        11: true, // Metamorphic Blast
        12: true, // Resurrect
        14: true, // Summon: Party
        16: true, // Shocking Implosion
        18: true, // Heal Thyself
        19: true, // Focus Heal
        22: true, // Kaia's Shield
        25: true, // Retaliate
        26: true, // Fiery Escape
        27: true, // Final Reprisal
        28: true, // Mana Charge / Divine Charge (Awakening)
        29: true, // Triple Nemesis
        30: true, // Plague of Exhaustion
        31: true, // Guardian Sanctuary
        32: true, // Divine Respite
        33: true, // Ishara's Lullaby
        34: true, // Restorative Burst
        35: true, // Energy Stars
        37: true, // Healing Immersion
        38: true, // Backstep
        39: true, // Grace of Resurrection
        40: true, // Zenobia's Vortex
        41: true, // Divine Intervention / Divine Vitality (Awakening)
        // Awakening
        42: true, // Holy Burst
        43: true, // Edict of Judgement
    },
    7: { // Mystic
        "enabled": true,
        1: false, // Sharan Bolt
        2: true, // Corruption Ring
        4: true, // Ancient Binding
        5: true, // Titanic Favor
        6: true, // Shara's Lash
        7: true, // Mana Infusion
        8: true, // Metamorphic Blast
        9: true, // Arun's Cleansing
        10: true, // Resurrect
        11: true, // Summon: Party
        12: true, // Vow of Rebirth
        13: true, // Aura of the Merciless
        14: true, // Aura of the Swift
        15: true, // Aura of the Unyielding
        16: true, // Aura of the Tenacious
        17: true, // Teleport Jaunt
        18: true, // Arun's Vitae
        21: true, // Retaliate
        22: true, // Arun's Tears
        23: true, // Metamorphic Smite
        24: true, // Volley of Curses
        25: true, // Thrall of Protection
        27: true, // Thrall of Life
        28: true, // Sonorous Dreams
        29: true, // Regression
        30: true, // Curse of Exhaustion
        31: true, // Curse of Confusion
        32: true, // Mire
        33: true, // Thrall of Vengeance
        34: true, // Thrall of Wrath
        35: true, // Command: Attack
        36: true, // Command: Follow
        37: true, // Warding Totem
        41: true, // Contagion
        42: true, // Boomerang Pulse
        43: true, // Unsummon Thrall
        // Awakening
        44: true, // Mass Teleport
        45: true, // Thrall Augmentation
        47: true, // Arunic Release
        48: true, // Summon: Thrall Lord
    },
    8: { // Reaper
        "enabled": true,
        1: false, // Spiral Barrage
        3: true, // Double Shear
        4: true, // Sundering Strike
        5: true, // Grim Strike
        6: true, // Death Spiral
        8: true, // Whipsaw
        9: true, // Smite
        10: true, // Pendulum Strike
        11: true, // Shadow Lash
        12: true, // Shadow Burst
        14: true, // Retaliate
        15: true, // Retribution
        16: true, // Shadow Reaping
        18: true, // Shrouded Escape
        40: true, // Shadow Step
        // Awakening
        19: true, // Dark Harvest
        20: true, // Cable Step
        21: true, // Recall Scythes
        23: true, // Binding Scythes
    },
    9: { // Gunner
        "enabled": true,
        1: false, // Blast
        2: true, // Bombardment
        3: true, // Scattershot
        4: true, // Point Blank
        5: true, // Burst Fire
        6: true, // Time Bomb
        7: true, // Arcane Barrage
        9: true, // Mana Missiles
        10: true, // Arc Bomb
        11: true, // Rocket Jump
        13: true, // Balder's Vengeance
        15: true, // Replenishment
        18: true, // HB
        19: true, // ST
        20: true, // Retaliate
        40: true, // Rolling Reload
        // Awakening
        41: true, // Modular Weapon System
        42: true, // Detonate
        43: true, // Remote Trigger
        44: true, // Balder's Vengeance (Modular Weapon System)
        47: true, // Obliteration
    },
    10: { // Brawler
        "enabled": true,
        1: false, // Punch
        2: true, // Counter
        3: false, // Divine Wrath
        4: false, // Ground Pound
        5: false, // Bullrush
        6: true, // Haymaker
        7: true, // Roundhouse Kick
        8: true, // Piledriver
        9: true, // Jackhammer
        10: true, // Counterpunch
        12: false, // Retaliate
        13: false, // Provoke
        14: false, // Infuriate
        15: false, // High Kick
        16: false, // Flip Kick
        18: false, // Growing Fury
        19: false, // Invigorating Rage
        21: false, // Mounting Rage
        40: false, // Quick Dash
        // Awakening
        22: true, // Flying Kick
        24: true, // One-Inch Punch
        26: true, // Rythmic Blows
    },
    11: { // Ninja
        "enabled": true,
        1: false, // Combo Attack
        2: true, // Shadow Jump
        3: true, // Leaves on the Wind
        4: true, // Jagged Path
        5: true, // Impact Bomb
        6: true, // One Thousand Cuts
        7: true, // Decoy Jutsu
        8: true, // Fire Avalanche
        9: true, // Smoke Bomb
        10: true, // Retaliate
        11: true, // Focus
        12: true, // Skyfall
        13: true, // Circle of Steel
        14: true, // Double Cut
        15: true, // Burning Heart
        16: true, // Death Blossom
        17: true, // Attunement
        18: true, // Bladestorm
        19: true, // Chakra Thrust
        20: true, // Clone Jutsu
        // Awakening
        21: true, // Boomerang Shuriken
        22: true, // Quick Attack
        23: true, // Inner Harmony
    },
    12: { // Valkyrie
        "enabled": false,
        1: false, // Slash
        2: true, // Overhead Slash
        3: true, // Glaive Strike
        4: true, // Charge
        5: true, // Maelstrom
        6: true, // Leaping Strike
        7: true, // Spinning Death
        8: true, // Titansbane
        9: true, // Ground Bash
        10: true, // Dream Slash
        11: true, // Shining Crescent
        12: true, // Ragnarok
        13: true, // Bloodflower
        14: true, // Evasion
        15: true, // Windslash
        16: true, // Runeburst
        17: true, // Balder's Tears
        18: true, // Retaliate
        19: true, // Reclamation
        20: true, // Backstab
        21: true, // Dark Herald
        // Awakening
        23: true, // Gungir's Bite
        24: true, // Twilight Waltz
        25: true, // Godsfall
    }
}
