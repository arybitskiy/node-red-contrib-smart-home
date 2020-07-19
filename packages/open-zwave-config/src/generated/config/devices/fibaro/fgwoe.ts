import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "FIBARO Walli Outlet", name: "Name" },
          {
            text: "http://www.openzwave.com/device-database/010F:1000:1f01",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgwoe.png", name: "ProductPic" },
          {
            text:
              "https://manuals.fibaro.com/content/manuals/en/FGWOEF-011/FGWOEF-011-T-EN-v1.0.pdf",
            name: "ProductSupport",
          },
          {
            text: "https://products.z-wavealliance.org/products/3220",
            id: "1000",
            name: "ProductPage",
            type: "1f01",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1f01",
          },
          { text: "FGWOE/F-11", id: "1000", name: "Identifier", type: "1f01" },
          {
            text:
              "FIBARO Walli Outlet is a smart electrical outlet designed to control electrical devices via Z-Wave network.\nIt measures active power and energy consumed by the controlled load.\nYou can install it with provided cover plate and socket cover or other compatible.\n\nMain features of FIBARO Walli Outlet:\n- Can turn ON/OFF plugged device remotely.\n- Available in two versions for plug types:\n  o Type E,\n  o Type F.\n- Can be used with provided cover plate or one of the following:\n  o GIRA - System 55 (Standard 55, E2, Event, Event Clear),\n  o Legrand - Celiane\n  o Schneider - Odace.\n- Active power and energy consumption metering.\n- Displays current load using multicolour LED frame (with FIBARO cover plate).\n- Supports Z-Wave network Security Modes: S0 with AES-128 encryption and S2 Authenticated with PRNG-based encryption.\n- Works as Z-Wave signal repeater (all non-battery operated devices within the network will act as repeaters to increase reliability of the network).\n- May be used with all devices certified with the Z-Wave Plus certificate and should be compatible with such devices produced by other manufacturers.",
            name: "Description",
          },
          {
            text:
              "FIBARO Walli Outlet is powered using DC power supply unit so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "To add the device to the Z-Wave network manually:\n1. Power the device.\n2. Set the main controller in (Security/non-Security Mode) add mode (see the controller's manual).\n3. Quickly, three times click one of the buttons.\n4. If you are adding in Security S2 Authenticated, scan the DSK QR code or input the underlined part of the DSK (on the device label).\n5. LED will start blinking yellow, wait for the adding process to end.\n6. Adding result will be confirmed by the Z-Wave controller's message and the LED frame:\n   - Green - successful (non-secure, S0, S2 non-authenticated),\n   - Magenta - successful (Security S2 Authenticated),\n   - Red - not successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n1. Power the device.\n2. Set the main controller into remove mode (see the controller's manual).\n3. Quickly, three times click the button.\n4. LED will start blinking yellow, wait for the removing process to end.\n5. Successful removing will be confirmed by the Z-Wave controller's message and red LED colour.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3220/xml",
                author: "Jorge Schrauwen",
                date: "06 Aug 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Remember device state",
            size: "1",
            value: "1",
            Help:
              "This parameter determines how the device will react in the event of power supply failure (e.g. power outage).",
            Item: [
              {
                label: "Wall Outlet remains switched off after restoring power",
                value: "0",
              },
              {
                label:
                  "Wall Outlet restores remembered state after restoring power",
                value: "1",
              },
            ],
          },
          {
            type: "int",
            index: "2",
            genre: "config",
            label: "Overload safety switch",
            value: "0",
            min: "0",
            max: "36800",
            Help:
              "This function allows to turn off the controlled device in case of exceeding the defined power. Controlled device can be turned back on via button or sending a control frame.\n0: function disabled, 10-36800: (1.0-3680.0W, step 0.1W) power threshold\n",
          },
          {
            type: "int",
            index: "10",
            genre: "config",
            label: "LED frame - power limit",
            value: "36800",
            min: "500",
            max: "36800",
            Help:
              "This parameter determines maximum active power. Exceeding it results in the LED frame flashing violet. Function is active only when parameter 11 is set to 8 or 9.\n500-36800 (50.0-3680.0W, step 0.1W) - power threshold",
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "LED frame - colour when ON",
            size: "1",
            value: "8",
            Help:
              "This parameter defines the LED colour when the device is ON.\n\nWhen set to 8 or 9, LED frame colour will change depending on the measured power and parameter 10. Other colours are set permanently and do not depend on power consumption.",
            Item: [
              { label: "LED disabled", value: "0" },
              { label: "White", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Magenta", value: "7" },
              {
                label: "Colour changes smoothly depending on measured power",
                value: "8",
              },
              {
                label: "Colour changes in steps depending on measured power",
                value: "9",
              },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "LED frame - colour when OFF",
            size: "1",
            value: "0",
            Help:
              "This parameter defines the LED colour when the device is OFF.",
            Item: [
              { label: "LED disabled", value: "0" },
              { label: "White", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Magenta", value: "7" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "LED frame - brightness",
            size: "1",
            value: "100",
            min: "0",
            max: "102",
            Help: "This parameter allows to adjust the LED frame brightness.",
            Item: [
              { label: "disabled", value: "0" },
              { label: "1%", value: "1" },
              { label: "2%", value: "2" },
              { label: "3%", value: "3" },
              { label: "4%", value: "4" },
              { label: "5%", value: "5" },
              { label: "6%", value: "6" },
              { label: "7%", value: "7" },
              { label: "8%", value: "8" },
              { label: "9%", value: "9" },
              { label: "10%", value: "10" },
              { label: "11%", value: "11" },
              { label: "12%", value: "12" },
              { label: "13%", value: "13" },
              { label: "14%", value: "14" },
              { label: "15%", value: "15" },
              { label: "16%", value: "16" },
              { label: "17%", value: "17" },
              { label: "18%", value: "18" },
              { label: "19%", value: "19" },
              { label: "20%", value: "20" },
              { label: "21%", value: "21" },
              { label: "22%", value: "22" },
              { label: "23%", value: "23" },
              { label: "24%", value: "24" },
              { label: "25%", value: "25" },
              { label: "26%", value: "26" },
              { label: "27%", value: "27" },
              { label: "28%", value: "28" },
              { label: "29%", value: "29" },
              { label: "30%", value: "30" },
              { label: "31%", value: "31" },
              { label: "32%", value: "32" },
              { label: "33%", value: "33" },
              { label: "34%", value: "34" },
              { label: "35%", value: "35" },
              { label: "36%", value: "36" },
              { label: "37%", value: "37" },
              { label: "38%", value: "38" },
              { label: "39%", value: "39" },
              { label: "40%", value: "40" },
              { label: "41%", value: "41" },
              { label: "42%", value: "42" },
              { label: "43%", value: "43" },
              { label: "44%", value: "44" },
              { label: "45%", value: "45" },
              { label: "46%", value: "46" },
              { label: "47%", value: "47" },
              { label: "48%", value: "48" },
              { label: "49%", value: "49" },
              { label: "50%", value: "50" },
              { label: "51%", value: "51" },
              { label: "52%", value: "52" },
              { label: "53%", value: "53" },
              { label: "54%", value: "54" },
              { label: "55%", value: "55" },
              { label: "56%", value: "56" },
              { label: "57%", value: "57" },
              { label: "58%", value: "58" },
              { label: "59%", value: "59" },
              { label: "60%", value: "60" },
              { label: "61%", value: "61" },
              { label: "62%", value: "62" },
              { label: "63%", value: "63" },
              { label: "64%", value: "64" },
              { label: "65%", value: "65" },
              { label: "66%", value: "66" },
              { label: "67%", value: "67" },
              { label: "68%", value: "68" },
              { label: "69%", value: "69" },
              { label: "70%", value: "70" },
              { label: "71%", value: "71" },
              { label: "72%", value: "72" },
              { label: "73%", value: "73" },
              { label: "74%", value: "74" },
              { label: "75%", value: "75" },
              { label: "76%", value: "76" },
              { label: "77%", value: "77" },
              { label: "78%", value: "78" },
              { label: "79%", value: "79" },
              { label: "80%", value: "80" },
              { label: "81%", value: "81" },
              { label: "82%", value: "82" },
              { label: "83%", value: "83" },
              { label: "84%", value: "84" },
              { label: "85%", value: "85" },
              { label: "86%", value: "86" },
              { label: "87%", value: "87" },
              { label: "88%", value: "88" },
              { label: "89%", value: "89" },
              { label: "90%", value: "90" },
              { label: "91%", value: "91" },
              { label: "92%", value: "92" },
              { label: "93%", value: "93" },
              { label: "94%", value: "94" },
              { label: "95%", value: "95" },
              { label: "96%", value: "96" },
              { label: "97%", value: "97" },
              { label: "98%", value: "98" },
              { label: "99%", value: "99" },
              { label: "100%", value: "100" },
              {
                label: "brightness directly proportional to measured power",
                value: "101",
              },
              {
                label: "brightness inversely proportional to measured power",
                value: "102",
              },
            ],
          },
          {
            type: "int",
            index: "30",
            genre: "config",
            label: "Alarm configuration - 1st slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n",
          },
          {
            type: "int",
            index: "31",
            genre: "config",
            label: "Alarm configuration - 2nd slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n",
          },
          {
            type: "int",
            index: "32",
            genre: "config",
            label: "Alarm configuration - 3rd slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n",
          },
          {
            type: "int",
            index: "33",
            genre: "config",
            label: "Alarm configuration - 4th slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n",
          },
          {
            type: "int",
            index: "34",
            genre: "config",
            label: "Alarm configuration - 5th slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n",
          },
          {
            type: "short",
            index: "35",
            genre: "config",
            label: "Alarm configuration - duration",
            value: "600",
            min: "0",
            max: "32400",
            Help:
              "This parameter defines duration of alarm sequence. When time set in this parameter elapses, alarm is cancelled, LED frame and relay restore normal operation, but do not recover state from before the alarm.\n        0: Infinite, 1-32400: (1s-9h, 1s step) - Duration\n        ",
          },
          {
            type: "list",
            index: "45",
            genre: "config",
            label: "Associations - 2nd group",
            size: "1",
            value: "3",
            min: "1",
            max: "3",
            Help:
              "This parameter determines which actions will result in sending control frames to devices associated in 2nd group.",
            Item: [
              { label: "Power exceeds UP threshold", value: "1" },
              { label: "Power drops below DOWN threshold", value: "2" },
              {
                label:
                  "Power exceeds UP threshold or drops below DOWN threshold",
                value: "3",
              },
            ],
          },
          {
            type: "int",
            index: "46",
            genre: "config",
            label: "Associations - UP threshold",
            value: "500",
            min: "100",
            max: "36800",
            Help:
              "This parameter determines upper power threshold for 2nd association group (paramter 45). Exceeding it will result in sending value set in parameter 47. Cannot be lower than DOWN threshold (parameter 48).\n100-36800: (10-3680W, 0.1W step) - power threshold\n",
          },
          {
            type: "list",
            index: "47",
            genre: "config",
            label: "Associations - UP threshold frame value",
            value: "255",
            min: "0",
            max: "255",
            size: "2",
            Help:
              "This parameter defines value sent to devices in 2nd association group when power exceeds UP threshold set in parameter 46 (using Basic Command Class).",
            Item: [
              { label: "turn off", value: "0" },
              { label: "level 1", value: "1" },
              { label: "level 2", value: "2" },
              { label: "level 3", value: "3" },
              { label: "level 4", value: "4" },
              { label: "level 5", value: "5" },
              { label: "level 6", value: "6" },
              { label: "level 7", value: "7" },
              { label: "level 8", value: "8" },
              { label: "level 9", value: "9" },
              { label: "level 10", value: "10" },
              { label: "level 11", value: "11" },
              { label: "level 12", value: "12" },
              { label: "level 13", value: "13" },
              { label: "level 14", value: "14" },
              { label: "level 15", value: "15" },
              { label: "level 16", value: "16" },
              { label: "level 17", value: "17" },
              { label: "level 18", value: "18" },
              { label: "level 19", value: "19" },
              { label: "level 20", value: "20" },
              { label: "level 21", value: "21" },
              { label: "level 22", value: "22" },
              { label: "level 23", value: "23" },
              { label: "level 24", value: "24" },
              { label: "level 25", value: "25" },
              { label: "level 26", value: "26" },
              { label: "level 27", value: "27" },
              { label: "level 28", value: "28" },
              { label: "level 29", value: "29" },
              { label: "level 30", value: "30" },
              { label: "level 31", value: "31" },
              { label: "level 32", value: "32" },
              { label: "level 33", value: "33" },
              { label: "level 34", value: "34" },
              { label: "level 35", value: "35" },
              { label: "level 36", value: "36" },
              { label: "level 37", value: "37" },
              { label: "level 38", value: "38" },
              { label: "level 39", value: "39" },
              { label: "level 40", value: "40" },
              { label: "level 41", value: "41" },
              { label: "level 42", value: "42" },
              { label: "level 43", value: "43" },
              { label: "level 44", value: "44" },
              { label: "level 45", value: "45" },
              { label: "level 46", value: "46" },
              { label: "level 47", value: "47" },
              { label: "level 48", value: "48" },
              { label: "level 49", value: "49" },
              { label: "level 50", value: "50" },
              { label: "level 51", value: "51" },
              { label: "level 52", value: "52" },
              { label: "level 53", value: "53" },
              { label: "level 54", value: "54" },
              { label: "level 55", value: "55" },
              { label: "level 56", value: "56" },
              { label: "level 57", value: "57" },
              { label: "level 58", value: "58" },
              { label: "level 59", value: "59" },
              { label: "level 60", value: "60" },
              { label: "level 61", value: "61" },
              { label: "level 62", value: "62" },
              { label: "level 63", value: "63" },
              { label: "level 64", value: "64" },
              { label: "level 65", value: "65" },
              { label: "level 66", value: "66" },
              { label: "level 67", value: "67" },
              { label: "level 68", value: "68" },
              { label: "level 69", value: "69" },
              { label: "level 70", value: "70" },
              { label: "level 71", value: "71" },
              { label: "level 72", value: "72" },
              { label: "level 73", value: "73" },
              { label: "level 74", value: "74" },
              { label: "level 75", value: "75" },
              { label: "level 76", value: "76" },
              { label: "level 77", value: "77" },
              { label: "level 78", value: "78" },
              { label: "level 79", value: "79" },
              { label: "level 80", value: "80" },
              { label: "level 81", value: "81" },
              { label: "level 82", value: "82" },
              { label: "level 83", value: "83" },
              { label: "level 84", value: "84" },
              { label: "level 85", value: "85" },
              { label: "level 86", value: "86" },
              { label: "level 87", value: "87" },
              { label: "level 88", value: "88" },
              { label: "level 89", value: "89" },
              { label: "level 90", value: "90" },
              { label: "level 91", value: "91" },
              { label: "level 92", value: "92" },
              { label: "level 93", value: "93" },
              { label: "level 94", value: "94" },
              { label: "level 95", value: "95" },
              { label: "level 96", value: "96" },
              { label: "level 97", value: "97" },
              { label: "level 98", value: "98" },
              { label: "level 99", value: "99" },
              { label: "level 100", value: "100" },
              { label: "turn on with previous level", value: "255" },
            ],
          },
          {
            type: "int",
            index: "48",
            genre: "config",
            label: "Associations - DOWN threshold",
            value: "300",
            min: "0",
            max: "36700",
            Help:
              "This parameter determines lower power threshold for 2nd association group (parameter 45). Exceeding it will result in sending value set in parameter 49.\n0-36700: (0-3670W, 0.1W step) - power threshold\n",
          },
          {
            type: "short",
            index: "49",
            genre: "config",
            label: "Associations - DOWN threshold frame value",
            value: "255",
            min: "0",
            max: "255",
            size: "2",
            Help:
              "This parameter defines value sent to devices in 2nd association group when power exceeds UP threshold set in parameter 46 (using Basic Command Class).",
            Item: [
              { label: "turn off", value: "0" },
              { label: "level 1", value: "1" },
              { label: "level 2", value: "2" },
              { label: "level 3", value: "3" },
              { label: "level 4", value: "4" },
              { label: "level 5", value: "5" },
              { label: "level 6", value: "6" },
              { label: "level 7", value: "7" },
              { label: "level 8", value: "8" },
              { label: "level 9", value: "9" },
              { label: "level 10", value: "10" },
              { label: "level 11", value: "11" },
              { label: "level 12", value: "12" },
              { label: "level 13", value: "13" },
              { label: "level 14", value: "14" },
              { label: "level 15", value: "15" },
              { label: "level 16", value: "16" },
              { label: "level 17", value: "17" },
              { label: "level 18", value: "18" },
              { label: "level 19", value: "19" },
              { label: "level 20", value: "20" },
              { label: "level 21", value: "21" },
              { label: "level 22", value: "22" },
              { label: "level 23", value: "23" },
              { label: "level 24", value: "24" },
              { label: "level 25", value: "25" },
              { label: "level 26", value: "26" },
              { label: "level 27", value: "27" },
              { label: "level 28", value: "28" },
              { label: "level 29", value: "29" },
              { label: "level 30", value: "30" },
              { label: "level 31", value: "31" },
              { label: "level 32", value: "32" },
              { label: "level 33", value: "33" },
              { label: "level 34", value: "34" },
              { label: "level 35", value: "35" },
              { label: "level 36", value: "36" },
              { label: "level 37", value: "37" },
              { label: "level 38", value: "38" },
              { label: "level 39", value: "39" },
              { label: "level 40", value: "40" },
              { label: "level 41", value: "41" },
              { label: "level 42", value: "42" },
              { label: "level 43", value: "43" },
              { label: "level 44", value: "44" },
              { label: "level 45", value: "45" },
              { label: "level 46", value: "46" },
              { label: "level 47", value: "47" },
              { label: "level 48", value: "48" },
              { label: "level 49", value: "49" },
              { label: "level 50", value: "50" },
              { label: "level 51", value: "51" },
              { label: "level 52", value: "52" },
              { label: "level 53", value: "53" },
              { label: "level 54", value: "54" },
              { label: "level 55", value: "55" },
              { label: "level 56", value: "56" },
              { label: "level 57", value: "57" },
              { label: "level 58", value: "58" },
              { label: "level 59", value: "59" },
              { label: "level 60", value: "60" },
              { label: "level 61", value: "61" },
              { label: "level 62", value: "62" },
              { label: "level 63", value: "63" },
              { label: "level 64", value: "64" },
              { label: "level 65", value: "65" },
              { label: "level 66", value: "66" },
              { label: "level 67", value: "67" },
              { label: "level 68", value: "68" },
              { label: "level 69", value: "69" },
              { label: "level 70", value: "70" },
              { label: "level 71", value: "71" },
              { label: "level 72", value: "72" },
              { label: "level 73", value: "73" },
              { label: "level 74", value: "74" },
              { label: "level 75", value: "75" },
              { label: "level 76", value: "76" },
              { label: "level 77", value: "77" },
              { label: "level 78", value: "78" },
              { label: "level 79", value: "79" },
              { label: "level 80", value: "80" },
              { label: "level 81", value: "81" },
              { label: "level 82", value: "82" },
              { label: "level 83", value: "83" },
              { label: "level 84", value: "84" },
              { label: "level 85", value: "85" },
              { label: "level 86", value: "86" },
              { label: "level 87", value: "87" },
              { label: "level 88", value: "88" },
              { label: "level 89", value: "89" },
              { label: "level 90", value: "90" },
              { label: "level 91", value: "91" },
              { label: "level 92", value: "92" },
              { label: "level 93", value: "93" },
              { label: "level 94", value: "94" },
              { label: "level 95", value: "95" },
              { label: "level 96", value: "96" },
              { label: "level 97", value: "97" },
              { label: "level 98", value: "98" },
              { label: "level 99", value: "99" },
              { label: "level 100", value: "100" },
              { label: "turn on with previous level", value: "255" },
            ],
          },
          {
            type: "list",
            index: "60",
            genre: "config",
            label: "Power reports - include self-consumption",
            size: "1",
            value: "0",
            Help:
              "This parameter determines whether the power measurements should include power consumed by the device itself.",
            Item: [
              { label: "Self-consumption not included", value: "0" },
              { label: "Self-consumption included", value: "1" },
            ],
          },
          {
            type: "short",
            index: "61",
            genre: "config",
            label: "Power reports - on change",
            value: "15",
            min: "0",
            max: "500",
            Help:
              "This parameter defines minimal change (from the last reported) in measured power that results in sending new report. For loads under 50W the parameter is irrelevant, reports are sent every 5W change.\n0: reporting on change disabled, 1-500: (1-500%, 1% step) minimal change",
          },
          {
            type: "short",
            index: "62",
            genre: "config",
            label: "Power reports - periodic",
            value: "3600",
            min: "0",
            max: "32400",
            Help:
              "This parameter defines reporting interval for measured power. Periodic reports are independent from changes in value (parameter 61).\n0: periodic reports disabled, 30-32400: (30s-9h, 1s step) time interval",
          },
          {
            type: "short",
            index: "65",
            genre: "config",
            label: "Energy reports - on change",
            value: "10",
            min: "0",
            max: "500",
            Help:
              "This parameter defines minimal change (from the last reported) in measured energy that results in sending new report.\n0: reporting on change disabled, 1-500: (0.01-5kWh, 0.01kWh step) minimal change",
          },
          {
            type: "short",
            index: "66",
            genre: "config",
            label: "Energy reports - periodic",
            value: "3600",
            min: "0",
            max: "32400",
            Help:
              "This parameter defines reporting interval for measured energy. Periodic reports are independent from changes in value (parameter 65).\n0: periodic reports disabled, 30-32400: (30s-9h, 1s step) time interval",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Power", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
