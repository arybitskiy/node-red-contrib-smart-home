import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0204:0463",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/mimo2plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1893/",
            id: "0204",
            name: "ZWProductPage",
            type: "0463",
          },
          {
            text:
              "Device Reset to Factory Defaults – Press and hold the program button for 15 seconds and then release. This can be done while the device is either in or out of a network. CAUTION – When this is done in-network, the device will no longer be in the network and all configurations and associations will be set to default. \nPlease use this procedure only when your network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The MIMO2+ module provides two voltage inputs and two relay outputs (either can be wired normally open or normally closed). \nZ-Wave™ messages can be used to read the inputs and control the outputs. The inputs are very configurable for different trigger conditions and can even be mapped to control the outputs. The module includes a button for Z-Wave™ inclusion/exclusion and an LED for various status indications. The functionality of the SIG1 and SIG2 inputs is:\n- Analog Triggering: Various trigger conditions can be set for high-to-low and low-to-high transitions. This provides great flexibility for capturing digital or analog events in a wide variety of applications. The trigger status can be automatically sent to the controller.\n- Associations: Each input can be associated with up to two other Z-Wave™ devices, so that, for example, an associated device will automatically turn on (or off) based on the occurrence of a trigger event.\nVoltage Reporting: The analog input voltage levels can also be sent to the controller.\nThe physical outputs are relays that are typically activated by Z-Wave™ commands. However, the user can override Z-Wave™ control by configuring the input trigger conditions to be mapped to the output relays via logical AND/OR functions.",
            name: "Description",
          },
          { text: "MIMO2+", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0204",
            name: "FrequencyName",
            type: "0463",
          },
          {
            text:
              '1) Activate exclusion mode on your Z-wave controller.\n2) Press the program button once.\n3) LED will blink 4 times quickly to indicate "in network" status.',
            name: "ExclusionDescription",
          },
          {
            text:
              '1) Activate inclusion mode on your Z-wave controller.\n2) Press the program button once.\n3) LED will blink 2 times quickly to indicate "in network" status.',
            name: "InclusionDescription",
          },
          { text: "MIMO2+", id: "0204", name: "Identifier", type: "0463" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1893/MIMO2 Plus Manual and Tech Appendix 2016-07-29.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1893/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
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
            genre: "config",
            index: "1",
            label: "Relay 1 Configuration",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\t\t0 The relay will remain latched in the position it is commanded to (open/off or closed/on).\n\t\t\t\t-128 to 127 Set this value to the amount of time in 100ms increments for the relay to remain closed/on before automatically returning to the open/off state. For example, a value of 2 = 0.2 Seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Relay 2 Configuration",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\t\t0 The relay will remain latched in the position it is commanded to (open/off or closed/on).\n\t\t\t\t-128 to 127 Set this value to the amount of time in 100ms increments for the relay to remain closed/on before automatically returning to the open/off state. For example, a value of 2 = 0.2 Seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "SIG 1 Multilevel Trigger Settings",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "167",
            Help: "Set this value to trigger between thresholds.",
          },
          {
            genre: "config",
            index: "4",
            label: "SIG 1 Lower Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "144",
            Help: "Set this value to set the lower threshold high number",
          },
          {
            genre: "config",
            index: "5",
            label: "SIG 1 Lower Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "128",
            Help: "Set this to set the lower threshold low number.",
          },
          {
            genre: "config",
            index: "6",
            label: "SIG 1 Upper Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "255",
            Help: "Set this to set the upper threshold, high number",
          },
          {
            genre: "config",
            index: "7",
            label: "SIG 1 Upper Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "254",
            Help: "Set this to set the upper threshold low number",
          },
          {
            genre: "config",
            index: "9",
            label: "SIG 2 Multilevel Trigger Settings",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "167",
            Help: "Set this value to trigger between thresholds.",
          },
          {
            genre: "config",
            index: "10",
            label: "SIG 2 Lower Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "144",
            Help: "Set this value to set the lower threshold high number",
          },
          {
            genre: "config",
            index: "11",
            label: "SIG 2 Lower Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "128",
            Help: "Set this to set the lower threshold low number.",
          },
          {
            genre: "config",
            index: "12",
            label: "SIG 2 Upper Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "255",
            Help: "Set this to set the upper threshold, high number",
          },
          {
            genre: "config",
            index: "13",
            label: "SIG 2 Upper Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "254",
            Help: "Set this to set the upper threshold low number",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "2" },
              { index: "2", label: "SIG1", max_associations: "2" },
              { index: "3", label: "SIG2", max_associations: "2" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
