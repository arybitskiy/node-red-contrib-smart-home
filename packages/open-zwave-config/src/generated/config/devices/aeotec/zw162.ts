import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:00A2:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw162.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3218/",
            id: "00A2",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "This product supports Security 2 Command Class. While a Security S2 enabled Controller is needed in order to fully use the security feature. This product can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will\nact as repeaters regardless of vendor to increase reliability of the network.\n\n1. Set your Z-Wave Controller into its 'Add Device' mode in order to add Chime into your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step.\n\n2. Power on Chime via the provided power adapter; its LED will be breathing white light all the time.\n\n3. Click Chime Action Button once, it will quickly flash white light for 30 seconds until Chime is added into the network. It will become constantly bright white light after being assigned a NodeID.\n\n4. If your Z-Wave Controller supports S2 encryption, enter the first 5 digits of DSK into your Controller's interface if/when requested. The DSK is printed on Chime's housing.\n\n5. If Adding fails, it will slowly flash white light 3 times and then become breathing white light; repeat steps 1 to 4. Contact us for further support if needed.\n\n6. If Adding succeeds, it will quickly flash white light 3 times and then become off. Now, Chime is a part of your Z-Wave home control system. You can configure it and its automations via your Z-Wave system; please refer to your software's user guide for precise instructions.\n\nNote:\nIf Action Button is clicked again during the Learn Mode, the Learn Mode will exit. At the same time, Indicator Light will extinguish immediately, and then become breathing white light.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "00A2",
            name: "FrequencyName",
            type: "0103",
          },
          { text: "Doorbell 6", name: "Name" },
          {
            text:
              "- S2 Security.\n- Not only a doorbell, but also can be used as a siren via setting.\n- Can be wireless controlled by more Button, up to 3.\n- Longer Button control distance, up to 120m.\n- Built-in multiple tones, up to 30.\n- Built-in multiple adjustable Light Effect.",
            name: "Description",
          },
          { name: "WakeupDescription" },
          {
            text:
              "1. Set your Z-Wave Controller into its ' Remove Device' mode in order to remove Chime from your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step.\n\n2. Power on Chime via the provided power adapter; its LED will be off.\n\n3. Click Chime Action Button 6 times quickly; it will bright white light, up to 2s.\n\n4. If Removing fails, it will keep off; repeat steps 1 to 3. Contact us for further support if needed.\n\n5. If Removing succeeds, it will quickly flash white light 3 times and then become breathing white light. Now, Chime is removed from Z-Wave network successfully.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3292/Doorbell 6 product manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "If the primary controller is missing or inoperable, you may need to reset the device to factory settings.\n\nMake sure the Chime is powered. To complete the reset process manually, press and hold the Action Button for at least 20s. The LED indicator will quickly flash white light 3 times and then become breathing white light, which indicates the reset operation is successful. Otherwise, please try again. Contact us for further support if needed.\n\nNote:\n1. This procedure should only be used when the primary controller is missing or inoperable.\n2. Factory Reset Chime will:\n(a) Remove Chime from Z-Wave network;\n(b) Delete the Association setting;\n(c) Restore the configuration settings to the default.(Except configuration parameter 51/52/53/54)",
            name: "ResetDescription",
          },
          { text: "ZW162-A", id: "00A2", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/3291/",
            id: "00A2",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text: "Australia / New Zealand",
            id: "00A2",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "ZW162-B", id: "00A2", name: "Identifier", type: "0203" },
          {
            text: "https://products.z-wavealliance.org/products/3292/",
            id: "00A2",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "ZW162-C", id: "00A2", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "00A2",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3218/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3291/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3292/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 6,
              },
              {
                text: "Fix up MapRootToEndpoint and Basic Get Disabled",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "07 Feb 2020",
                revision: 7,
              },
              {
                text: "Add option 96, allow stopping playing chime",
                author: "Michael Bisbjerg - michael@mbwarez.dk",
                date: "02 Apr 2020",
                revision: 8,
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
            bitmask: "4287037440",
            genre: "config",
            index: "1",
            label: "Light Effect and Tone Play Mode for Browse",
            size: "4",
            type: "bitset",
            value: "16777216",
            Help:
              "Light Effect and PlayTone configuration for Browse Endping\n      ",
            BitSet: [
              {
                id: "32",
                Label: "Last Valid Configuration (Light Effect)",
                Help:
                  "Use the Last Valid Configuration Value for the Light Effect",
              },
              {
                id: "31",
                Label: "Light Effect #7",
                Help: "Use Light Effect #7, Defined in Parameter 22",
              },
              {
                id: "30",
                Label: "Light Effect #6",
                Help: "Use Light Effect #6, Defined in Parameter 21",
              },
              {
                id: "29",
                Label: "Light Effect #5",
                Help: "Use Light Effect #5, Defined in Parameter 20",
              },
              {
                id: "28",
                Label: "Light Effect #4",
                Help: "Use Light Effect #4, Defined in Parameter 19",
              },
              {
                id: "27",
                Label: "Light Effect #3",
                Help: "Use Light Effect #3, Defined in Parameter 18",
              },
              {
                id: "26",
                Label: "Light Effect #2",
                Help: "Use Light Effect #2, Defined in Parameter 17",
              },
              {
                id: "25",
                Label: "Light Effect #1",
                Help: "Use Light Effect #1, Defined in Parameter 16",
              },
              {
                id: "24",
                Label: "Last Valid Configuration (Tone Mode)",
                Help: "Use the Last Valid Configuration Value for the Tone",
              },
              {
                id: "19",
                Label: "List Random Playback",
                Help:
                  "If you’re not sure which tone to use, you can configure the value of Tone Play Mode to be 3. Then send Basic Set 0xFF to Endpoint 1 or Root Device to trigger auto-selecting tone function. Chime will play built-in tones randomly and the Default Tone Identifier will be changed each time a new tone is played. When send Basic Set 0x00 to Endpoint 1 or Root Device to stop playing tone, the Default Tone Identifier will store, which means the tone has been selected.\nPlease note that the Tone Play Mode needs to be configured to be 0 or 1 after the tone is selected, otherwise the automatic selection tone function will be retriggered when the Endpoint 1 or Root Device is triggered to play tone and light again.",
              },
              {
                id: "18",
                Label: "List Loop Playback",
                Help:
                  "If you’re not sure which tone to use, you can configure the value of Tone Play Mode to be 2. Then send Basic Set 0xFF to Endpoint 1 or Root Device to trigger auto-selecting tone function. Chime will play built-in tones in order and the Default Tone Identifier will be changed each time a new tone is played. When send Basic Set 0x00 to Endpoint 1 or Root Device to stop playing tone, the Default Tone Identifier will store, which means the tone has been selected.\nPlease note that the Tone Play Mode needs to be configured to be 0 or 1 after the tone is selected, otherwise the automatic selection tone function will be retriggered when the Endpoint 1 or Root Device is triggered to play tone and light again.",
              },
              {
                id: "17",
                Label: "Single Loop Playback",
                Help: "Use a single loop playback for the Tone",
              },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Light Effect and Tone Effect for Tampering",
            type: "int",
            value: "16777217",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Light Effect and Tone Effect for Doorbell 1",
            type: "int",
            value: "33554433",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Light Effect and Tone Effect for Doorbell 2",
            type: "int",
            value: "33554433",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Light Effect and Tone Effect for Doorbell 3",
            type: "int",
            value: "33554433",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "Light Effect and Tone Effect for Environment",
            type: "int",
            value: "67108864",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "7",
            label: "Light Effect and Tone Effect for Security",
            type: "int",
            value: "67108864",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Light Effect and Tone Effect for Endpoint Emergency",
            type: "int",
            value: "67108864",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "16",
            label: "Light Effect 1",
            type: "int",
            value: "2519864323",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "17",
            label: "Light Effect 2",
            type: "int",
            value: "1684275203",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "18",
            label: "Light Effect 3",
            type: "int",
            value: "4325635",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "19",
            label: "Light Effect 4",
            type: "int",
            value: "1107296259",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "Light Effect 5",
            type: "int",
            value: "10",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "21",
            label: "Light Effect 6",
            type: "int",
            value: "2560",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "22",
            label: "Light Effect 7",
            type: "int",
            value: "1107296257",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "32",
            label: "Basic Set to nodes in Group 2",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 2",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "Basic Set to nodes in Group 3",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 3",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "34",
            label: "Basic Set to nodes in Group 4",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 4",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "35",
            label: "Basic Set to nodes in Group 5",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 5",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "36",
            label: "Basic Set to nodes in Group 6",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 6",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "38",
            label: "Basic Set to nodes in Group 8",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 8",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "39",
            label: "Basic Set to nodes in Group 9",
            size: "1",
            type: "list",
            value: "3",
            Help: "Configure how to send Basic Set to nodes in Group 9",
            Item: [
              { label: "Don't send Basic Set", value: "0" },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, don't send Basic Set",
                value: "1",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, don't send Basic Set",
                value: "2",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0xFF. When Chime stops playing tone, send Basic Set 0x00",
                value: "3",
              },
              {
                label:
                  "When Chime starts playing tone, send Basic Set 0x00. When Chime stops playing tone, send Basic Set 0xFF",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "48",
            label: "Trigger Unpairing Button Mode",
            size: "1",
            type: "list",
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
            genre: "config",
            index: "49",
            label: "Trigger pairing Button Mode",
            size: "1",
            type: "list",
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
            genre: "config",
            index: "50",
            label: "Report which Pairing Button Mode is triggered",
            read_only: "true",
            size: "1",
            type: "list",
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
            genre: "config",
            index: "52",
            label: "Get the information of #1 Button",
            read_only: "true",
            type: "int",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "53",
            label: "Get the information of #2 Button",
            read_only: "true",
            type: "int",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "54",
            label: "Get the information of #3 Button",
            read_only: "true",
            type: "int",
            value: "0",
            Help:
              "Please Refer to Engineering Specification - Aeotec Doorbell 6\n      ",
          },
          {
            genre: "config",
            index: "96",
            label: "Allow stopping chime with the action button",
            type: "bool",
            value: "0",
            Help:
              "Enable or Disable the ability that click the Action Button to stop a playing tone.",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
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
      { id: "20", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "96",
        Compatibility: [{ MapRootToEndpoint: [true] }],
        Instance: [
          { index: "1", label: "Browse" },
          { index: "2", label: "Tampering" },
          { index: "3", label: "Doorbell 1" },
          { index: "4", label: "Doorbell 2" },
          { index: "5", label: "Doorbell 3" },
          { index: "6", label: "Enviroment" },
          { index: "7", label: "Security" },
          { index: "8", label: "Emergency" },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "9",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Browse", max_associations: "5" },
              { index: "3", label: "Tampering", max_associations: "5" },
              { index: "4", label: "Doorbell 1", max_associations: "5" },
              { index: "5", label: "Doorbell 2", max_associations: "5" },
              { index: "6", label: "Doorbell 3", max_associations: "5" },
              { index: "7", label: "Environment", max_associations: "5" },
              { index: "8", label: "Security", max_associations: "5" },
              { index: "9", label: "Emergency", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
