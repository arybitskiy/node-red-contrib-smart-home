import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:00a4:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw164.png", name: "ProductPic" },
          { text: "ZW164-C", id: "00a4", name: "Identifier", type: "0003" },
          {
            text: "https://products.z-wavealliance.org/products/3301/",
            id: "00a4",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "00a4",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZW164-A", id: "00a4", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/3284/",
            id: "00a4",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "00a4",
            name: "FrequencyName",
            type: "0103",
          },
          { name: "WakeupDescription" },
          {
            text:
              "This product supports Security 2 Command Class. While a Security S2 enabled Controller is needed in order to fully use the security feature. This product can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network. 1. Set your Z-Wave Controller into its 'Add Device' mode in order to add Chime into your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step. 2. Power on Chime via the provided power adapter; its LED will be breathing white light all the time. 3. Click Chime Action Button once, it will quickly flash white light for 30 seconds until Chime is added into the network. It will become constantly bright white light after being assigned a NodeID. 4. If your Z-Wave Controller supports S2 encryption, enter the first 5 digits of DSK into your Controller's interface if/when requested. The DSK is printed on Chime's housing. 5. If Adding fails, it will slowly flash white light 3 times and then become breathing white light; repeat steps 1 to 4. Contact us for further support if needed. 6. If Adding succeeds, it will quickly flash white light 3 times and then become off. Now, Chime is a part of your Z-Wave home control system. You can configure it and its automations via your Z-Wave system; please refer to your software's user guide for precise instructions. Note: If Action Button is clicked again during the Learn Mode, the Learn Mode will exit. At the same time, Indicator Light will extinguish immediately, and then become breathing white light.",
            name: "InclusionDescription",
          },
          { text: "Indoor Siren 6", name: "Name" },
          {
            text:
              "1. Set your Z-Wave Controller into its ' Remove Device' mode in order to remove Chime from your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step. 2. Power on Chime via the provided power adapter; its LED will be off. 3. Click Chime Action Button 6 times quickly; it will bright white light, up to 2s. 4. If Removing fails, it will keep off; repeat steps 1 to 3. Contact us for further support if needed. 5. If Removing succeeds, it will quickly flash white light 3 times and then become breathing white light. Now, Chime is removed from Z-Wave network successfully.",
            name: "ExclusionDescription",
          },
          {
            text:
              "- S2 Security. - Not only a siren, but also can be used as a doorbell via setting. - Can be wireless controlled by more Button, up to 3. - Longer Button control distance, up to 120m. - Built-in multiple tones, up to 30. - Built-in multiple adjustable Light Effect.",
            name: "Description",
          },
          {
            text:
              "If the primary controller is missing or inoperable, you may need to reset the device to factory settings. Make sure the Chime is powered. To complete the reset process manually, press and hold the Action Button for at least 20s. The LED indicator will quickly flash white light 3 times and then become breathing white light, which indicates the reset operation is successful. Otherwise, please try again. Contact us for further support if needed. Note: 1. This procedure should only be used when the primary controller is missing or inoperable. 2. Factory Reset Chime will: (a) Remove Chime from Z-Wave network; (b) Delete the Association setting; (c) Restore the configuration settings to the default.(Except configuration parameter 51/52/53/54)",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3301/Indoor%20Siren%206%20product%20manual.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Add metadata for aeotec indoor siren 6 #1894",
                author: "Geert van Horrik - @GeertvanHorrik",
                date: "28 Jul 2019",
                revision: 1,
              },
              {
                text:
                  "Add metadata for North American model - https://products.z-wavealliance.org/products/3284",
                author: "Matt Belhorn - matt.belhorn@gmail.com",
                date: "28 Feb 2020",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "96",
        Instance: [
          { index: "1", label: "Browse" },
          { index: "2", label: "Tampering" },
          { index: "3", label: "Doorbell 1" },
          { index: "4", label: "Doorbell 2" },
          { index: "5", label: "Doorbell 3" },
          { index: "6", label: "Environment" },
          { index: "7", label: "Security" },
          { index: "8", label: "Emergency" },
        ],
      },
      {
        id: "112",
        Value: [
          {
            index: "1",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Play Mode for Endpoint 1 (Browse).",
            min: "16777216",
            max: "‭2147418112‬",
            size: "4",
            value: "16777216",
          },
          {
            index: "2",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 2 (Tampering).",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "16777217",
          },
          {
            index: "3",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 3 (Doorbell 1).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "33554433",
          },
          {
            index: "4",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 4 (Doorbell 2).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "33554433",
          },
          {
            index: "5",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 5 (Doorbell 3).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "33554433",
          },
          {
            index: "6",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 6 (Environment).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "67108864",
          },
          {
            index: "7",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 7 (Security).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "67108864",
          },
          {
            index: "8",
            genre: "config",
            type: "int",
            label:
              "Configure the Light Effect and Tone Effect for Endpoint 8 (Emergency).",
            min: "16777216",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "67108864",
          },
          {
            index: "16",
            genre: "config",
            type: "int",
            label: "Configure #1 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "17",
            genre: "config",
            type: "int",
            label: "Configure #2 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "18",
            genre: "config",
            type: "int",
            label: "Configure #3 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "19",
            genre: "config",
            type: "int",
            label: "Configure #4 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "20",
            genre: "config",
            type: "int",
            label: "Configure #5 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "21",
            genre: "config",
            type: "int",
            label: "Configure #6 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "22",
            genre: "config",
            type: "int",
            label: "Configure #7 Light Effect.",
            min: "0",
            max: "‭‭2147483647‬‬",
            size: "4",
            value: "1259934723",
          },
          {
            index: "32",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 2.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 1 starts playing tone, send Basic Set 0xFF. When Endpoint 1 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 1 starts playing tone, send Basic Set 0x00. When Endpoint 1 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 1 starts playing tone, send Basic Set 0xFF. When Endpoint 1 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 1 starts playing tone, send Basic Set 0x00. When Endpoint 1 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "33",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 3.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 2 starts playing tone, send Basic Set 0xFF. When Endpoint 2 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 2 starts playing tone, send Basic Set 0x00. When Endpoint 2 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 2 starts playing tone, send Basic Set 0xFF. When Endpoint 2 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 2 starts playing tone, send Basic Set 0x00. When Endpoint 2 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "34",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 4.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 3 starts playing tone, send Basic Set 0xFF. When Endpoint 3 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 3 starts playing tone, send Basic Set 0x00. When Endpoint 3 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 3 starts playing tone, send Basic Set 0xFF. When Endpoint 3 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 3 starts playing tone, send Basic Set 0x00. When Endpoint 3 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "35",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 5.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 4 starts playing tone, send Basic Set 0xFF. When Endpoint 4 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 4 starts playing tone, send Basic Set 0x00. When Endpoint 4 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 4 starts playing tone, send Basic Set 0xFF. When Endpoint 4 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 4 starts playing tone, send Basic Set 0x00. When Endpoint 4 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "36",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 6.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 5 starts playing tone, send Basic Set 0xFF. When Endpoint 5 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 5 starts playing tone, send Basic Set 0x00. When Endpoint 5 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 5 starts playing tone, send Basic Set 0xFF. When Endpoint 5 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 5 starts playing tone, send Basic Set 0x00. When Endpoint 5 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "37",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 7.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 6 starts playing tone, send Basic Set 0xFF. When Endpoint 6 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 6 starts playing tone, send Basic Set 0x00. When Endpoint 6 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 6 starts playing tone, send Basic Set 0xFF. When Endpoint 6 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 6 starts playing tone, send Basic Set 0x00. When Endpoint 6 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "38",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 8.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 7 starts playing tone, send Basic Set 0xFF. When Endpoint 7 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 7 starts playing tone, send Basic Set 0x00. When Endpoint 7 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 7 starts playing tone, send Basic Set 0xFF. When Endpoint 7 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 7 starts playing tone, send Basic Set 0x00. When Endpoint 7 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "39",
            genre: "config",
            type: "list",
            label: "Configure how to send Basic Set to nodes in Group 9.",
            min: "0",
            max: "‭‭4‬‬",
            size: "1",
            value: "3",
            Item: [
              { label: "Don't send Basic Set", value: "0‬" },
              {
                label:
                  "When Endpoint 8 starts playing tone, send Basic Set 0xFF. When Endpoint 8 stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Endpoint 8 starts playing tone, send Basic Set 0x00. When Endpoint 8 stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Endpoint 8 starts playing tone, send Basic Set 0xFF. When Endpoint 8 stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Endpoint 8 starts playing tone, send Basic Set 0x00. When Endpoint 8 stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            index: "48",
            genre: "config",
            type: "list",
            label: "Trigger Unpairing Button Mode",
            size: "1",
            write_only: "true",
            Help: "",
            Item: [
              { label: "Trigger Unpairing #1 Button Mode", value: "1" },
              { label: "Trigger Unpairing #2 Button Mode", value: "2" },
              { label: "Trigger Unpairing #2 and #1 Button Mode", value: "3" },
              { label: "Trigger Unpairing #3 Button Mode", value: "4" },
              { label: "Trigger Unpairing #3 and #1 Button Mode", value: "5" },
              { label: "Trigger Unpairing #3 and #2 Button Mode", value: "6" },
              {
                label: "Trigger Unpairing #3, #2 and #1 Button Mode",
                value: "7",
              },
            ],
          },
          {
            index: "49",
            genre: "config",
            type: "list",
            label: "Trigger pairing Button Mode",
            size: "1",
            write_only: "true",
            Help: "",
            Item: [
              { label: "Exit Pairing Button Mode", value: "0" },
              { label: "Trigger Pairing #1 Button Mode", value: "1" },
              { label: "Trigger Pairing #2 Button Mode", value: "2" },
              { label: "Trigger Pairing #3 Button Mode", value: "4" },
            ],
          },
          {
            index: "50",
            genre: "config",
            type: "list",
            label: "Report which Pairing Button Mode is triggered",
            read_only: "true",
            size: "1",
            Help: "",
            Item: [
              {
                label: "There is no Pairing Button Mode being triggered",
                value: "0",
              },
              { label: "Pairing #1 Button Mode is triggered", value: "1" },
              { label: "Pairing #1 Button Mode is triggered", value: "2" },
              { label: "Pairing #1 Button Mode is triggered", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "51",
            label: "Report which Buttons had been paired",
            read_only: "true",
            size: "1",
            type: "list",
            Help: "",
            Item: [
              { label: "There is no paired Button", value: "0" },
              { label: "#1 Button had been paired", value: "1" },
              { label: "#2 Button had been paired", value: "2" },
              { label: "#2 and #1 Button had been paired", value: "3" },
              { label: "#3 Button had been paired", value: "4" },
              { label: "#3 and #1 Button had been paired", value: "5" },
              { label: "#3 and #2 Button had been paired", value: "6" },
              { label: "#3x #2 and #1 Button had been paired", value: "7" },
            ],
          },
          {
            index: "52",
            genre: "config",
            type: "int",
            label: "Get the information of #1 Button",
            read_only: "true",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Indoor Siren 6\n      ",
          },
          {
            index: "53",
            genre: "config",
            type: "int",
            label: "Get the information of #2 Button",
            read_only: "true",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Indoor Siren 6\n      ",
          },
          {
            index: "54",
            genre: "config",
            type: "int",
            label: "Get the information of #3 Button",
            read_only: "true",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Indoor Siren 6\n      ",
          },
          {
            index: "96",
            genre: "config",
            type: "list",
            label:
              "Enable or Disable the ability that click the Action Button to stop a playing tone.",
            min: "0",
            max: "1",
            size: "1",
            value: "0",
            Item: [
              { label: "Disable", value: "0‬" },
              { label: "Enable", value: "1‬" },
            ],
          },
          {
            index: "255",
            genre: "config",
            type: "list",
            label: "Reset To Factory Defaults",
            size: "4",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "9",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                index: "2",
                label: "On/Off control (Browse)",
                max_associations: "5",
              },
              {
                index: "3",
                label: "On/Off control (Tampering)",
                max_associations: "5",
              },
              {
                index: "4",
                label: "On/Off control (Doorbell 1)",
                max_associations: "5",
              },
              {
                index: "5",
                label: "On/Off control (Doorbell 2)",
                max_associations: "5",
              },
              {
                index: "6",
                label: "On/Off control (Doorbell 3)",
                max_associations: "5",
              },
              {
                index: "7",
                label: "On/Off control (Environment)",
                max_associations: "5",
              },
              {
                index: "8",
                label: "On/Off control (Security)",
                max_associations: "5",
              },
              {
                index: "9",
                label: "On/Off control (Emergency)",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
