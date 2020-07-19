import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 14,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0203",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgs223.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2731/",
            id: "1000",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text:
              "1)           Make sure the Switch 2 is within the direct range of your Z-Wave controller.\n2)           Identify the S1 switch or the B-button (located on the device’s housing).\n3)           Set the main controller in remove mode (see the controller’s manual).\n4)           Quickly, three times press the S1 switch or the B-button.\n5)           Wait for the removing process to end.\n6)           Successful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The remotely operated FIBARO Double Switch 2 is designed to turn two electrical devices on and off and to measure their power and energy consumption. The compact size of the device makes it the world's smallest of its type and allows for the product to be installed in wall switch boxes or housings. FIBARO Double Switch 2 can be controlled either via Z-Wave network or with a wall switch through a direct connection.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2753/FGS-2x3-EN-T-v1.2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1)           Switch off the mains voltage (disable the fuse).\n2)           Make sure the Switch 2 is within the direct range of your Z-Wave controller. \n3)           Connect the device in accordance with one of the diagrams included in the manual.\n4)           After verifying correctness of the connection switch on the mains voltage.\n5)           Identify the S1 switch or the B-button (located on the device’s housing). \n6)           Set the main controller in (security/non-security) add mode (see the controller’s manual). \n7)           Quickly, three times press the S1 switch or the B-button. \n8)           Wait for the adding process to end. \n9)           Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. In order to reset the device:\n\n1)           Switch off the mains voltage (disable the fuse).\n2)           Remove the Switch 2 from the wall switch box.\n3)           Switch on the mains voltage.\n4)           Press and hold the B-button to enter the menu.\n5)           Wait for the visual LED indicator to glow yellow.\n6)           Quickly release and click the B-button again.\n7)           After few seconds the device will be restarted, which is signalled with the red LED indicator colour.\n\nUse reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "FGS-223", id: "1000", name: "Identifier", type: "0203" },
          { text: "FIBARO Double Switch 2", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text:
              "The FIBARO Double Switch 2 is powered with the mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2751/",
            id: "2000",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "FGS-223", id: "2000", name: "Identifier", type: "0203" },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text: "https://products.z-wavealliance.org/products/2753/",
            id: "3000",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "FGS-223", id: "3000", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "3000",
            name: "FrequencyName",
            type: "0203",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1742/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1874/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1875/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2731/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 12,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2751/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 13,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2753/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 14,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "38", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Saving state before power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Saving state before power failure",
            Item: [
              {
                label:
                  "State NOT saved at power failure, all outputs are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State saved at power failure, all outputs are set to previous state upon power restore",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "First channel - operating mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for the 1st channel controlled by the S1 switch.",
            Item: [
              { label: "Standard operation", value: "0" },
              { label: "Delay On", value: "1" },
              { label: "Delay Off", value: "2" },
              { label: "Auto On", value: "3" },
              { label: "Auto Off", value: "4" },
              { label: "Flashing Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label:
              "First channel - reaction to switch for delay/auto ON/OFF modes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines how the device in timed mode reacts to pushing the switch connected to the S1 terminal.",
            Item: [
              { label: "Cancel mode and set target state", value: "0" },
              {
                label: "No reaction to switch - mode runs until it ends",
                value: "1",
              },
              {
                label: "Reset timer - start counting from the beginning",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "First channel - time parameter for delay/auto ON/OFF modes",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "This parameter allows to set time parameter used in timed modes. (s)",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "First channel - pulse time for flashing mode",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "\n                This parameter allows to set time of switching to opposite state in flashing mode.\n                1-32000 (0.1-3200.0s, 0.1s step)\n            ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Second channel - operating mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for the 2nd channel controlled by the S2 switch.",
            Item: [
              { label: "Standard operation", value: "0" },
              { label: "Delay On", value: "1" },
              { label: "Delay Off", value: "2" },
              { label: "Auto On", value: "3" },
              { label: "Auto Off", value: "4" },
              { label: "Flashing Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label:
              "Second channel - reaction to switch for delay/auto ON/OFF modes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines how the device in timed mode reacts to pushing the switch connected to the S2 terminal.",
            Item: [
              { label: "Cancel mode and set target state", value: "0" },
              {
                label: "No reaction to switch - mode runs until it ends",
                value: "1",
              },
              {
                label: "Reset timer - start counting from the beginning",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label:
              "Second channel - time parameter for delay/auto ON/OFF modes",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "This parameter allows to set time parameter used in timed modes. (s)",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Second channel - pulse time for flashing mode",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "\n                This parameter allows to set time of switching to opposite state in flashing mode.\n                1-32000 (0.1-3200.0s, 0.1s step)\n            ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Switch type",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help: "Inputs type configuration",
            Item: [
              { label: "Momentary switch", value: "0" },
              {
                label:
                  "Toggle switch (contact closed - On, contact opened - OFF)",
                value: "1",
              },
              {
                label:
                  "Toggle switch (device changes status when switch changes status)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Flashing mode report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enabled / Disabled reports on Flashing mode",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "\n                This parameter defines how commands are sent to specified association groups: as secure or non-secure.\n                Parameter is active only in Z-Wave network security mode.\n                This parameter does not apply to 1st lifeline group.\n                1 - 2nd group sent as secure.\n                2 - 3rd group sent as secure.\n                4 - 4th group sent as secure.\n                8 - 5th group sent as secure.\n                Default setting: 15 (all)\n            ",
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "S1 switch - scenes sent",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions result in sending scene IDs assigned to them.\n                1 - Key pressed 1 time.\n                2 - Key pressed 2 times.\n                4 - Key pressed 3 times.\n                8 - Key Hold Down and Key Released.\n                Default setting: 0 (none)\n            ",
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "S2 switch - scenes sent",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions result in sending scene IDs assigned to them.\n                1 - Key pressed 1 time.\n                2 - Key pressed 2 times.\n                4 - Key pressed 3 times.\n                8 - Key Hold Down and Key Released.\n                Default setting: 0 (none)\n            ",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "S1 associations sent to 2nd and 3rd association groups",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions are ignored when sending commands to devices associated in 2nd and 3rd association group.\n                All actions are active by default.\n                1 - ignore turning On with 1 click of the switch.\n                2 - ignore turning OFF with 1 click of the switch.\n                4 - ignore holding and releasing the switch.\n                8 - ignore double click of the switch.\n                Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "S1 Switch ON value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter determines value sent with Switch On command to devices associated in 2nd and 3rd association group.\n            ",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "S1 Switch OFF value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter determines value sent with Switch Off command to devices associated in 2nd and 3rd association group.\n            ",
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label:
              "S1 Switch Double Click value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "99",
            Help:
              "\n                This parameter determines value sent with Double Click command to devices associated in 2nd and 3rd association group.\n            ",
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "S2 associations sent to 4th and 5th association groups",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions are ignored when sending commands to devices associated in 4th and 5th association group.\n                All actions are active by default.\n                1 - ignore turning On with 1 click of the switch.\n                2 - ignore turning OFF with 1 click of the switch.\n                4 - ignore holding and releasing the switch.\n                8 - ignore double click of the switch.\n                Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "S2 Switch ON value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter determines value sent with Switch On command to devices associated in 4th and 5th association group.\n            ",
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label: "S2 Switch OFF value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter determines value sent with Switch Off command to devices associated in 4th and 5th association group.\n            ",
          },
          {
            genre: "config",
            index: "38",
            instance: "1",
            label:
              "S2 Switch Double Click value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "99",
            Help:
              "\n                This parameter determines value sent with Double Click command to devices associated in 4th and 5th association group.\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Reaction to General Alarm",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter determines how the device will react to General Alarm frame.",
            Item: [
              { label: "Ignored", value: "0" },
              { label: "Turn On", value: "1" },
              { label: "Turn OFF", value: "2" },
              { label: "Flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Reaction to Flood Alarm",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter determines how the device will react to Flood Alarm frame.",
            Item: [
              { label: "Ignored", value: "0" },
              { label: "Turn On", value: "1" },
              { label: "Turn OFF", value: "2" },
              { label: "Flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Reaction to CO/CO2/Smoke Alarm",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter determines how the device will react to CO/CO2/Smoke Alarm frame.",
            Item: [
              { label: "Ignored", value: "0" },
              { label: "Turn On", value: "1" },
              { label: "Turn OFF", value: "2" },
              { label: "Flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Reaction to Heat Alarm",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter determines how the device will react to Heat alarm frame.",
            Item: [
              { label: "Ignored", value: "0" },
              { label: "Turn On", value: "1" },
              { label: "Turn OFF", value: "2" },
              { label: "Flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Flashing alarm duration",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "\n                This parameter allows to set duration of flashing alarm mode.\n                1-32000 (0.1-32000s, 1s step) Default: 600 (10min)\n            ",
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "First channel - power reports",
            max: "100",
            min: "1",
            size: "2",
            type: "short",
            value: "20",
            Help:
              "\n                This parameter determines the minimum change in consumed power\n                that will result in sending new power report to the main controller.\n                1-100 (%) Default 20 (20%)\n            ",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "First channel - minimal time between power reports",
            max: "120",
            min: "1",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "\n                This parameter determines minimum time that has to elapse before\n                sending new power report to the main controller.\n                1-120 (s) Default 10 (10s)\n            ",
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "First channel - energy reports",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "100",
            Help:
              "\n                This parameter determines the minimum change in consumed energy\n                that will result in sending new energy report to the main controller.\n                1-32000 (0.01-320 kWh) Default 100 (1kWh)\n            ",
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "Second Channel - power reports",
            max: "100",
            min: "1",
            size: "2",
            type: "short",
            value: "20",
            Help:
              "\n                This parameter determines the minimum change in consumed power\n                that will result in sending new power report to the main controller.\n                1-100 (%) Default 20 (20%)\n            ",
          },
          {
            genre: "config",
            index: "55",
            instance: "1",
            label: "Second channel - minimal time between power reports",
            max: "120",
            min: "1",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "\n                This parameter determines minimum time that has to elapse before\n                sending new power report to the main controller.\n                1-120 (s) Default 10 (10s)\n            ",
          },
          {
            genre: "config",
            index: "57",
            instance: "1",
            label: "Second channel - energy reports",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "100",
            Help:
              "\n                This parameter determines the minimum change in consumed energy\n                that will result in sending new energy report to the main controller\n                1-32000 (0.01-320 kWh) Default 100 (1kWh)\n            ",
          },
          {
            genre: "config",
            index: "58",
            instance: "1",
            label: "Periodic power reports",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "\n                This parameter determines in what time interval the periodic\n                power reports are sent to the main controller.\n                1-32000 (s) Default 3600 (1h)\n            ",
          },
          {
            genre: "config",
            index: "59",
            instance: "1",
            label: "Periodic energy reports",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "\n                This parameter determines in what time interval the periodic\n                power reports are sent to the main controller.\n                1-32000 (s) Default 3600 (1h)\n            ",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Measuring energy consumed by the device itself",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                This parameter determines whether energy metering should include\n                the amount of energy consumed by the device itself. Results are\n                being added to energy reports for first endpoint.\n            ",
            Item: [
              { label: "function inactive", value: "0" },
              { label: "function active", value: "1" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off S1", max_associations: "5" },
              { index: "3", label: "Dimmer S1", max_associations: "5" },
              { index: "4", label: "On/Off S2", max_associations: "5" },
              { index: "5", label: "Dimmer S2", max_associations: "5" },
            ],
          },
        ],
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
    ],
  },
};

export default config;
