import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { IoAdd as AddIcon } from 'react-icons/io5'

import Select from 'react-select'

const options = [
    {
        value: 'Revolution%20Case',
        label: 'Revolution',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Revolution%20Case',
            buffURL: 'https://buff.163.com/goods/921379?from=market#tab=selling'
        }
    },
    {
        value: 'Recoil%20Case',
        label: 'Recoil Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Recoil%20Case',
            buffURL: 'https://buff.163.com/goods/900464?from=market#tab=selling'
        }
    },
    {
        value: 'Dreams%20%26%20Nightmares%20Case',
        label: 'Dreams & Nightmares Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case',
            buffURL: 'https://buff.163.com/goods/886606?from=market#tab=selling'
        }
    },
    {
        value: 'Operation%20Riptide%20Case',
        label: 'Operation Riptide Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU5narKKW4SvIrhw9PZlaPwNuqAxmgBucNz2L3C8dyj31Xn-0VtMW3wdY6LMlhplna0TPI/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Riptide%20Case',
            buffURL: 'https://buff.163.com/goods/871092?from=market#tab=selling'
        }
    },
    {
        value: 'Snakebite%20Case',
        label: 'Snakebite Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Snakebite%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Broken%20Fang%20Case',
        label: 'Operation Broken Fang Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU3naeZIWUStYjgxdnewfGmZb6DxW8AupMp27yT9IqiilCxqkRkZGyldoaLMlhp6IQjKcg/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Broken%20Fang%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Fracture%20Case',
        label: 'Fracture Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Fracture%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Prisma%202%20Case',
        label: 'Prisma 2 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Prisma%202%20Case',
            buffURL: ''
        }
    },
    {
        value: 'CS20%20Case',
        label: 'CS20 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU0naHKIj9D7oTgl4LelaGnMuqIwDgFusR337HCpYmhiwzm8ktqMjv2INKLMlhprbp6CTE/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/CS20%20Case',
            buffURL: ''
        }
    },
    {
        value: 'X-Ray%20P250%20Package',
        label: 'X-Ray P250 Package',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsS091PDtH5O_1FAthwfTNP2kTvomzzYHdlqLxZb7XlW4IuJwk3u2S8NWl3QS1_EA6YT2iddeXdgIgIQaHHJc2aVo/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/X-Ray%20P250%20Package',
            buffURL: ''
        }
    },
    {
        value: 'Shattered%20Web%20Case',
        label: 'Shattered Web Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUznaCaJWVDvozlzdONwvKjYLiBk24IsZEl0uuYrNjw0A3n80JpZWzwIYWLMlhpLvhcskA/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Shattered%20Web%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Prisma%20Case',
        label: 'Prisma Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUynfWaI25G6Ijkl9iPw_SnNrjXw2oBu8cj3b2Qo4_33QbnrUdlYD37ddCLMlhpvs0XIz0/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Prisma%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Danger%20Zone%20Case',
        label: 'Danger Zone Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Danger%20Zone%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Horizon%20Case',
        label: 'Horizon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUwnfbOdDgavYXukYTZkqf2ZbrTwmkE6scgj7CY94ml3FXl-ENkMW3wctOLMlhpVHKV9YA/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Horizon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Clutch%20Case',
        label: 'Clutch Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY5naqQIz4R7Yjix9bZkvKiZrmAzzlTu5AoibiT8d_x21Wy8hY_MWz1doSLMlhpM3FKbNs/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Clutch%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Spectrum%202%20Case',
        label: 'Spectrum 2 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY4naeaJGhGtdnmx4Tek_bwY-iFlGlUsJMp3LuTot-mjFGxqUttZ2r3d4eLMlhpnZPxZK0/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Spectrum%202%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Hydra%20Case',
        label: 'Operation Hydra Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY3navMJWgQtNm1ldLZzvOiZr-BlToIsZcoi-yTpdutiVW2-Es4NWjwIo-LMlhpinMS53M/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Hydra%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Spectrum%20Case',
        label: 'Spectrum Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY2nfKadD4U7Y7lwYXexaGlYb3QzjlUvZ0k0ujHptug2VbirkRrNW2md4SLMlhph09hpX0/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Spectrum%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Glove%20Case',
        label: 'Glove Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY1naTMdzwTtNrukteIkqT2MO_Uwz5Q6cYhibyXo4rw2ALsrkRoYjuncNCLMlhpEV4XDTk/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Glove%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Gamma%202%20Case',
        label: 'Gamma 2 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVFx5KAVo5PSkKV4xhfGfKTgVvIXlxNPSwaOmMLiGwzgJvJMniO-Zoo_z2wXg-EVvfSmtc78HsNoy/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Gamma%202%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Gamma%20Case',
        label: 'Gamma Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--WoY322QziqkdpZGr3IteLMlhpw4RJCv8/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Gamma%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Chroma%203%20Case',
        label: 'Chroma 3 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYynaSdJGhE74y0wNWIw_OlNuvXkDpSuZQmi--SrN-h3gey-Uo6YWmlIoCLMlhplhFFvwI/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Chroma%203%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Wildfire%20Case',
        label: 'Operation Wildfire Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYxnaeQImRGu4S1x9TawfSmY-iHkmoD7cEl2LiQpIjz3wPl_ERkYWHwLY-LMlhp9pkR_UQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Wildfire%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Revolver%20Case',
        label: 'Revolver Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYwnfKfcG9HvN7iktaOkqD1auLTxD5SvZYgiLvFpo7xjVLh-kdrYWnzcoGLMlhpsyM-5vg/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Revolver%20Case',
            buffURL: ''
        }
    },
    {
        value: '',
        label: 'Shadow Case',
        data: {
            thumbnail: '',
            steamURL: '',
            buffURL: ''
        }
    },
    {
        value: 'Shadow%20Case',
        label: 'Falchion Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF4u1qubIW4Su4mzxYHbzqGtZ-KGlz8EuJcg3rnE9NiijVe3_UY-Zzr2JJjVLFEEeiQRtg/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Shadow%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Chroma%202%20Case',
        label: 'Chroma 2 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFAuhqSaKWtEu43mxtbbk6b1a77Twm4Iu8Yl3bCU9Imii1Xt80M5MmD7JZjVLFH-6VnQJQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Chroma%202%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Chroma%20Case',
        label: 'Chroma Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Chroma%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Vanguard%20Weapon%20Case',
        label: 'Operation Vanguard Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFIuh6rJImVGvtjllYaNka6la7rUxWkE65BzibvD9N7z0Q22-0Fka2GlJ5jVLFHqavWW2g/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Vanguard%20Weapon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'eSports%202014%20Summer%20Case',
        label: 'eSports 2014 Summer Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Y07ODdfDBH_pKzwdfSkqTyZLjQxjsF7sEoiLyQ9I2ljgHt_EZlYzr6J4DHIA9oZ1-D5BHglkR7Cs6C/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/eSports%202014%20Summer%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Breakout%20Weapon%20Case',
        label: 'Operation Breakout Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFMu1aPMI24auITjxteJwPXxY72AkGgIvZAniLjHpon2jlbl-kpvNjz3JJjVLFG9rl1YLQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Breakout%20Weapon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Huntsman%20Weapon%20Case',
        label: 'Huntsman Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQu0PaQIm9DtY6wzYaIxKWtN7iJwW8G6Z0h2LqWoY6s2Qy2-0Q_Nzv7IJjVLFGZqUbjlQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Huntsman%20Weapon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Phoenix%20Weapon%20Case',
        label: 'Operation Phoenix Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Phoenix%20Weapon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'CS%3AGO%20Weapon%20Case%203',
        label: 'CS:GO Weapon Case 3',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5fSnf15k0KGacG0UtYXnzdTdkq-gariGlDgHvMcmjryZotqg2wCxrUVtfSmtc20v4quI/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case%203',
            buffURL: ''
        }
    },
    {
        value: 'Winter%20Offensive%20Weapon%20Case',
        label: 'Winter Offensive Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Winter%20Offensive%20Weapon%20Case',
            buffURL: ''
        }
    },
    {
        value: 'eSports%202013%20Winter%20Case',
        label: 'eSports 2013 Winter Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Yz7KKcPzwav9jnzdfdlfWmY7_TzmkF6ZMlj77A9o3x0Qe1qhBkZGjxI9LBJgMgIQaH1G7WeaA/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/eSports%202013%20Winter%20Case',
            buffURL: ''
        }
    },
    {
        value: 'CS%3AGO%20Weapon%20Case%202',
        label: 'CS:GO Weapon Case 2',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5PT8elUwgKKZJmtEvo_kxITZk6StNe-Fz2pTu8Aj3eqVpIqgjVfjrRI9fSmtc1Nw-Kh3/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case%202',
            buffURL: ''
        }
    },
    {
        value: 'Operation%20Bravo%20Case',
        label: 'Operation Bravo Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Bravo%20Case',
            buffURL: ''
        }
    },
    {
        value: 'eSports%202013%20Case',
        label: 'eSports 2013 Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1YznfCcdzkR74vnw9TZwa-sYOOCzzoF6ZJ0jL6Qp9uj3Qbj_Uc6Z2z1I9WLMlhp9VPHu3g/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/eSports%202013%20Case',
            buffURL: ''
        }
    },
    {
        value: 'CS%3AGO%20Weapon%20Case',
        label: 'CS:GO Weapon Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case',
            buffURL: ''
        }
    }

    // Add other options here
]

const MyDropdown = ({ onChange }) => (
    <Select options={options} onChange={onChange} />
)

const Modal = () => {

    // Set states for all inputs
    const [quantityInput, setQuantityInput] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null); // Add state for selected option

    const handleQuantityInput = (event) => {
        setQuantityInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption); // Update the selected option state
    }

    const addToInventory = () => {

        if (selectedOption) {
            const { value, label, data } = selectedOption; // Extract the necessary data from the selected option
            const nameInput = label;
            const hashnameInput = value;
            const imageInput = data.thumbnail;
            const steamInput = data.steamURL;
            const buffInput = data.buffURL;
    
            console.log("nameInput: ", nameInput);
            console.log("quantityInput: ", quantityInput);
            console.log("hashnameInput: ", hashnameInput);
            console.log("imageInput: ", imageInput);
            console.log("steamInput: ", steamInput);
            console.log("buffInput: ", buffInput);
    
            // if inventory local storage object does not exists create new, else add to existing:
            if (localStorage.getItem('inventory') === null) {
    
                let inventory = {}
    
                inventory[hashnameInput] = {
                    name: nameInput || "NULL",
                    quantity: quantityInput || 0,
                    market_hash_name: hashnameInput || "NULL",
                    image: imageInput || "NULL",
                    url1: steamInput || "NULL",
                    url2: buffInput || "NULL"
                }
    
                localStorage.setItem('inventory', JSON.stringify(inventory))
                window.dispatchEvent(new Event('inventory-update'));
    
            } else {
    
                // get current state of inventory as object
                let inventory = JSON.parse(localStorage.getItem('inventory'))
    
                inventory[hashnameInput] = {
                    name: nameInput || "NULL",
                    quantity: quantityInput || 0,
                    market_hash_name: hashnameInput || "NULL",
                    image: imageInput || "NULL",
                    url1: steamInput || "NULL",
                    url2: buffInput || "NULL"
                }
    
                localStorage.removeItem('inventory')
                localStorage.setItem('inventory', JSON.stringify(inventory))
                window.dispatchEvent(new Event('inventory-update'));
            }
        }
    }

    return (
        <Popup trigger={<button>Add <AddIcon /></button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h2>
                        New entry
                    </h2>
                    <form className="item-input">

                        <label>Item</label>
                        <MyDropdown onChange={handleOptionChange} />

                        <label>Quantity</label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={quantityInput}
                            onChange={handleQuantityInput}
                        />

                        <button
                            type="button"
                            onClick={addToInventory}
                        >
                            Add <AddIcon />
                        </button>
                    </form>
                </div>
                <div className="modal-bg"></div>
            </div>
        </Popup>
    )

}

export default Modal;
