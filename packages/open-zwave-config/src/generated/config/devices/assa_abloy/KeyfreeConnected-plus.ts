import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0001:0007",
            name: "OzwInfoPage",
          },
          {
            text: "images/assa_abloy/KeyfreeConnected-plus.png",
            name: "ProductPic",
          },
          {
            text: "https://products.z-wavealliance.org/products/2576/",
            id: "0001",
            name: "ZWProductPage",
            type: "0007",
          },
          {
            text:
              "Put the Z-Wave controller into add mode\n\nEnter the Master code on the lock, followed by #\n\nPress the 4 button, followed by #\n\nPress the 1 button followed by #\n\nRefer to the operation manual of the Z-Wave controller to complete the add/inclusion process\n\nFor more information on this please visit:\nwww.yale.co.uk/smart-living",
            name: "InclusionDescription",
          },
          {
            text:
              "Put the Z-Wave controller into remove mode\n\nEnter the Master code on the lock, followed by #\n\nPress the 4 button, followed by #\n\nPress the 2 button followed by #\n\nRefer to the operation manual of the Z-Wave controller to complete the remove/exclusion process\n\nFor more information on this please visit:\nwww.yale.co.uk/smart-living",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2743/Instruction Manual V2b.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Keyfree Connected Ready smart lock\n\nFeatures\n\n    Battery operated\n    Low battery indicator with emergency battery connection\n    User codes and settings remain if batteries are replaced\n    3 minute lock out if code is entered incorrectly 5 times\n    Tamper alarm\n    For use on UPVC & Composite Doors\n    2 year guarantee",
            name: "Description",
          },
          { text: "Keyfree Connected", name: "Name" },
          {
            text:
              "Enter the Master code on the lock, followed by #\n\nPress the 4 button, followed by #\n\nPress the 0 button followed by #\n\nPlease use this procedure only when the network controller is missing or inoperable",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0007",
          },
          { text: "YD-01-CON", id: "0001", name: "Identifier", type: "0007" },
          {
            text: "https://products.z-wavealliance.org/products/2743/",
            id: "0001",
            name: "ZWProductPage",
            type: "0006",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0006",
          },
          { text: "YKFCON", id: "0001", name: "Identifier", type: "0006" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2576/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2743/xml",
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
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Volume Level",
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
              { label: "Enable", value: "255" },
              { label: "Disable", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Relock Time",
            max: "60",
            min: "7",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "7",
            Help:
              "After successful local unlock, automatically relock after the specified time (default = 7 seconds)",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Remote Relock Time",
            max: "90",
            min: "10",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "10",
            Help:
              "After successful remote unlock, automatically relock after the specified time (default = 10 seconds)",
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
