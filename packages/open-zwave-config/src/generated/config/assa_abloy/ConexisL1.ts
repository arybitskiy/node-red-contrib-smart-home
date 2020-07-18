import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0002:6600",
            name: "OzwInfoPage",
          },
          { text: "images/assa_abloy/ConexisL1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2535/",
            id: "0002",
            name: "ZWProductPage",
            type: "6600",
          },
          {
            text:
              "Features:\n\nControl Via Smartphone - Configure, Control and unlock your Smart Door Lock from your smartphone via our secure Bluetooth App.\n\nKeyless - Say goodbye to keys, Open your Smart Door lock via your smartphone, Key Card or Key Tag.\n\nSimple to Fit - Engineered for easy installation.\n\nConnectivity - Compatible with the Yale Smart Home system. (Yale module sold separately)\n\nSecurity as standard - Built in tamper alarm, PAS24 accredited.\n\nBattery Operated - Powered by 4 AA batteries and a warning when they're running low.\n\nBattery Backup - A 9v battery connection port can be used to power the Smart door lock in the event of flat batteries.\n\nSecure Push & Turn Thumbturn - Engineered to give additional convenience and security to your door",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "6600",
          },
          { text: "SD-L1000-CH", id: "0002", name: "Identifier", type: "6600" },
          {
            text:
              "Put the Z-Wave controller into add or learn mode\n\nPress the R button on the lock 3 times quickly (within 1.5 seconds)\n\nRefer to the operation manual of the Z-Wave controller to complete the learn in process\n\nFor more information on this please visit:\nwww.yale.co.uk/smart-living",
            name: "InclusionDescription",
          },
          {
            text:
              "Only use this when the existing Z-Wave controller is missing or inoperable\n\n Lift up the lever handle\n\nWhile holding the handle up, press the R button 3 times within 1.5 seconds",
            name: "ResetDescription",
          },
          {
            text:
              "Put the existing Z-Wave controller into Remove Mode\n\nPress the R button on the lock 3 times quickly (within 1.5 secs)\n\nThe lock is now ready to be added to a new Z-Wave controller\n\nFor more information on this please visit:\nwww.yale.co.uk/smart-living",
            name: "ExclusionDescription",
          },
          { text: "Conexis L1", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2535/Instruction Manual V2a.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2535/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
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
            instance: "1",
            label: "Volume",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "Volume of the keypad tones and any voice prompts (default = 3, high)",
            Item: [
              { label: "Silent", value: "1" },
              { label: "Low", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Auto Relock",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable or disable the Auto relock feature (default = 255, enable)",
            Item: [
              { label: "On", value: "255" },
              { label: "Off", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Auto-re-lock Time",
            max: "60",
            min: "7",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "After successful local unlock, automatically relock after the specified time (default = 7 seconds)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Wrong Tag Limit",
            max: "20",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "\n\t\t    Number of incorrect tags before lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable for the time specified by Wrong tag timeout parameter. (5 = default)\n\t\t\t",
            Item: [
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
              { label: "9", value: "9" },
              { label: "10", value: "10" },
              { label: "11", value: "11" },
              { label: "12", value: "12" },
              { label: "13", value: "13" },
              { label: "14", value: "14" },
              { label: "15", value: "15" },
              { label: "16", value: "16" },
              { label: "17", value: "17" },
              { label: "18", value: "18" },
              { label: "19", value: "19" },
              { label: "20", value: "20" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Wrong tag timeout",
            max: "250",
            min: "1",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "Number of seconds unit will be inoperable after number of Wrong tag attempts is exceeded (30 = default)",
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
