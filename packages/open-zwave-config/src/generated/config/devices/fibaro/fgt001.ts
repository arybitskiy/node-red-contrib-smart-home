import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:1301",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgt001.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3194/",
            id: "1000",
            name: "ZWProductPage",
            type: "1301",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3194/FGT-001-EN-T-v1.0.pdf",
            name: "ProductManual",
          },
          { text: "The Heat Controller", name: "Name" },
          {
            text:
              "Please use this procedure only when the network primary controller is missing or otherwise inoperable.\nReset procedure allows to restore the device back to its factory settings, which means all information about the network and user configuration will be deleted.\nTo perform factory reset:\n1.\tUse the included key to press and hold the button.\n2.\tRelease the button when you see yellow LED colour.\n3.\tClick the button to confirm the selection.\n4.\tAfter finishing resetting the device will be put in Standby Mode. Click the button to activate it again.",
            name: "ResetDescription",
          },
          {
            text:
              "FIBARO Heat Controller is a remotely controlled thermostatic head to control temperature in the room. It measures the temperature and automatically adjust the heat level.  It can be mounted without tools on three types of thermostatic radiator valves. It is also possible to create schedules via app to easily manage temperature throughout the week.\nMain features:\n•\tto be installed on three types of valves: M30 x 1.5, Danfoss RTD-N and Danfoss RA-N,\n•\tcompatible with any Z-Wave or Z-Wave Plus Controller,\n•\tsupports Z-Wave network Security Modes: S0 with AES-128 encryption and S2 with PRNG-based encryption,\n•\tbuilt-in battery recharged through standard micro-USB port,\n•\teasy installation - no tools required,\n•\tcan use dedicated temperature sensor,\n•\tsupports heating schedules,\n•\tautomatic calibration,\n•\tanti-freeze function,\n•\tdecalc function, \n•\tunconstrained rotation spherical knob to set desired temperature.",
            name: "Description",
          },
          {
            text:
              "To add the device to the Z-Wave network:\n1.\tMake sure the device is within the direct range of your Z-Wave controller.\n2.\tSet the main controller in (security/non-security) add mode.\n3.\tUse the included key to quickly triple click the button on the thermostatic head.\n4.\tThe LED ring will start blinking white.\n5.\tIf you are adding in S2 authenticated mode, type in the device pin code (underlined part of the public key on the label).\n6.\tWait for the adding process to end.\n7.\tSuccessful adding will be confirmed by the Z-Wave controller.",
            name: "InclusionDescription",
          },
          {
            text:
              "FIBARO Heat Controller is a FLiRS device. The FLiRS device alternates between sleep mode and a partially awake mode in which it is listening beam signal. When device receives this beam, it immediately fully wakes up and then communicates with the controller or other Z-Wave device.",
            name: "WakeupDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1301",
          },
          { text: "FGT-001", id: "1000", name: "Identifier", type: "1301" },
          {
            text:
              "To remove the device from the Z-Wave network:\n1.\tMake sure the device is within the direct range of your Z-Wave controller.\n2.\tSet the main controller into remove mode.\n3.\tUse the included key to quickly triple click the button on the thermostatic head.\n4.\tThe LED ring will start blinking white.\n5.\tWait for the removing process to end.\n6.\tSuccessful removing will be confirmed by the Z-Wave controller.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2586/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2971/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3194/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "255",
            min: "0",
            read_only: "false",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Manual Valve Control", value: "31" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "31", label: "Manual Valve Control" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating",
            max: "24",
            min: "16",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Override Schedule duration",
            max: "10000",
            min: "10",
            type: "int",
            value: "240",
            Help:
              "This parameter determines duration of Override Schedule after turning the knob while normal schedule is active (set by Schedule CC).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Additional functions",
            size: "4",
            type: "int",
            value: "1",
            Help:
              "This parameter allows to enable different additional functions of the device.\n                1) Enable open window detector\n                2) Enable fast open window detector\n                4) Increase receiver sensitivity (shortens battery life)\n                8) Enable LED indications when controlling remotely\n                16) Protect from setting Full ON and Full OFF mode by turning the knob manually\n                NOTE: Parameter values may be combined, e.g. 1+8=9 means than open window detector and LED indications when controlling remotely are enabled.\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Additional functions status",
            read_only: "true",
            size: "4",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to check status of different additional functions.\n                1) Optional temperature sensor connected and operational\n                2) Open window detected\n                NOTE: Parameter values may be combined, e.g. 1+2=3 means than optional sensor works properly and open window detection was triggered.\n            ",
            Item: [
              { label: "None", value: "0" },
              {
                label: "Optional temperature sensor connected and operational",
                value: "1",
              },
              { label: "Open window detected", value: "2" },
              {
                label: "Optional temperature sensor and Open window detected",
                value: "3",
              },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
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
