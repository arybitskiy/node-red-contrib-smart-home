import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8490:0100",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zxt-600.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2445/",
            id: "8490",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text:
              "1, Refer to your primary controller to enter into the Inclusion Mode or Exclusion Mode\n2, When it is prompted to enter it, please triple click the “PROG” button within 1 second.\n3, Green Indicator flashes TWICE then stay off",
            name: "ExclusionDescription",
          },
          { text: "AC MASTER", name: "Name" },
          {
            text:
              "1, Refer to your primary controller to enter into the Inclusion Mode or Exclusion Mode\n2, When it is prompted to enter it, please triple click the “PROG” button within 1 second.\n3, Green Indicator flashes TWICE then stay off",
            name: "InclusionDescription",
          },
          {
            text:
              "ZXT-600 AC Master is a Z-Wave plus certified IR Bridge for split air conditioner control by receiving Z-Wave command and translating to Infrared command and flawlessly work with any Z-Wave compliant gateway.\nWith its over 250 brands built-in code library and ever-green up to date cloud IR database supporting advanced code learning search, ZXT-600 can easily set up and smart control most of AC brands and models actively worldwide by Z-Wave gateway.\nThe battery powered device will allow you to mount it anywhere you want such as wall, ceiling or put it on table and never compromise on the form factor. By supporting OTA function, gateway can enable ZXT-600 to update firmware if newest available.",
            name: "Description",
          },
          {
            text:
              "Press and Hold “PROG” button for 3 seconds on AC Master, the Green Indicator will light up. DO NOT Release the “PROG” Button until Green Indicator flashes TWICE.\nRemark : Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "8490",
            name: "FrequencyName",
            type: "0100",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2553/BW8490_Installation_Guide_201700807.pdf",
            name: "ProductManual",
          },
          { text: "ZXT-600US", id: "8490", name: "Identifier", type: "0100" },
          {
            text: "https://products.z-wavealliance.org/products/2553/",
            id: "8490",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text: 'Press the "PROG" button to wakeup the unit',
            name: "WakeupDescription",
          },
          { text: "ZXT-600EU", id: "8490", name: "Identifier", type: "0101" },
          {
            text: "CEPT (Europe)",
            id: "8490",
            name: "FrequencyName",
            type: "0101",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2445/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2553/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "67", Compatibility: [{ GetSupported: [false], Base: [0] }] },
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Cool", value: "2" },
              { label: "Resume", value: "5" },
              { label: "Fan Only", value: "6" },
              { label: "Dry Air", value: "8" },
              { label: "Auto Changeover", value: "10" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "2", label: "Cool" },
              { index: "5", label: "Resume" },
              { index: "6", label: "Fan Only" },
              { index: "8", label: "Dry Air" },
              { index: "10", label: "Auto Changeover" },
            ],
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "25",
            label: "Learn IR code",
            max: "32",
            min: "0",
            size: "2",
            type: "list",
            value: "0",
            write_only: "true",
            Help:
              '\n\t\t\t\tIn case none of the code on the code list works for the targeted air conditioner, user can use IR code learning function.\n\t\t\t\tSee manual at section "IR Code Learning" for a description of the procedure. Value 0-22\n\t\t\t',
            Item: [
              { label: "OFF", value: "0" },
              { label: "ON (resume)", value: "1" },
              { label: "Cool 17 C", value: "2" },
              { label: "Cool 18 C", value: "3" },
              { label: "Cool 19 C", value: "4" },
              { label: "Cool 20 C", value: "5" },
              { label: "Cool 21 C", value: "6" },
              { label: "Cool 22 C", value: "7" },
              { label: "Cool 23 C", value: "8" },
              { label: "Cool 24 C", value: "9" },
              { label: "Cool 25 C", value: "10" },
              { label: "Cool 26 C", value: "11" },
              { label: "Cool 27 C", value: "12" },
              { label: "Cool 28 C", value: "13" },
              { label: "Cool 29 C", value: "14" },
              { label: "Cool 30 C", value: "15" },
              { label: "Heat 17 C", value: "16" },
              { label: "Heat 18 C", value: "17" },
              { label: "Heat 19 C", value: "18" },
              { label: "Heat 20 C", value: "19" },
              { label: "Heat 21 C", value: "20" },
              { label: "Heat 22 C", value: "21" },
              { label: "Heat 23 C", value: "22" },
              { label: "Heat 24 C", value: "23" },
              { label: "Heat 25 C", value: "24" },
              { label: "Heat 26 C", value: "25" },
              { label: "Heat 27 C", value: "26" },
              { label: "Heat 28 C", value: "27" },
              { label: "Heat 29 C", value: "28" },
              { label: "Heat 30 C", value: "29" },
              { label: "Dry Mode", value: "30" },
              { label: "Auto Mode", value: "31" },
              { label: "Fan Mode", value: "32" },
            ],
          },
          {
            genre: "config",
            index: "26",
            label: "Check IR Code Learning Status",
            read_only: "true",
            size: "1",
            type: "list",
            Help:
              "Note: The status value 0x01 and 0x04 will be reset to 0 when the ZXT-120 receive a get command to this parameter.\n\t\t\t\tIdle - this IR channel is idle (default).\n\t\t\t\tOK - the latest learning process successful and completed.\n\t\t\t\tLearning - the ZXT- 120 is busy processing previous learning request.\n\t\t\t\tFailed - the latest learning request failed.",
            Item: [
              { label: "Idle", value: "0" },
              { label: "OK", value: "1" },
              { label: "Learning", value: "2" },
              { label: "Failed", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "27",
            label: "Set IR Code number from built-in code library",
            size: "2",
            type: "short",
            value: "0",
            Help: "Refer to Code Finder Web page.",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Set auto report condition trigger",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tSet Auto Report Condition Trigger By Room Temperature change.\n                Disable AUTO report function (Default) for saving battery life.\n                Auto report if room temperature is different from last report.\n\t\t\t",
            Item: [
              { label: "Disable AUTO report", value: "0" },
              { label: "0.5 C", value: "1" },
              { label: "1.0 C", value: "2" },
              { label: "1.5 C", value: "3" },
              { label: "2.0 C", value: "4" },
              { label: "2.5 C", value: "5" },
              { label: "3.0 C", value: "6" },
              { label: "3.5 C", value: "7" },
              { label: "4.0 C", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "32",
            label: "Set Built-in IR Emitter Control",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "\n\t\t\t\tTo avoid the IR interference by disabling the surrounding IR emitter if 2 air-conditioners in a room are used.\n\t\t\t\tExtend the battery life by disabling the Surround IR Emitters\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "Control Air Conditioner SWING function",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Swing Off", value: "0" },
              { label: "Swing Auto", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Set Auto report condition by Time interval",
            max: "8",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tSet Auto Report Condition Trigger By Time interval\n\t\t\t",
            Item: [
              { label: "1 Hr", value: "1" },
              { label: "2 Hrs", value: "2" },
              { label: "3 Hrs", value: "3" },
              { label: "4 Hrs", value: "4" },
              { label: "5 Hrs", value: "5" },
              { label: "6 Hrs", value: "6" },
              { label: "7 Hrs", value: "7" },
              { label: "8 Hrs", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label: "Calibrate temperature reading",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "\n\t\t\t\tTemperature offset value.\n\t\t\t",
            Item: [
              { label: "0 C", value: "0" },
              { label: "1 C", value: "1" },
              { label: "2 C", value: "2" },
              { label: "3 C", value: "3" },
              { label: "4 C", value: "4" },
              { label: "5 C", value: "5" },
              { label: "-1 C", value: "255" },
              { label: "-2 C", value: "254" },
              { label: "-3 C", value: "253" },
              { label: "-4 C", value: "252" },
              { label: "-5 C", value: "251" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
