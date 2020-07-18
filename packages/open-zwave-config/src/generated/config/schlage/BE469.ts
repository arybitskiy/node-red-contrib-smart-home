import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/003B:5044:6341",
            name: "OzwInfoPage",
          },
          { text: "images/schlage/BE469.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/748/",
            id: "5044",
            name: "ZWProductPage",
            type: "6341",
          },
          { text: "BE469", id: "5044", name: "Identifier", type: "6341" },
          {
            text:
              "At Schlage, we know security. After all, we’ve been innovating locks for more than 90 years. Now, with the Touch screen Deadbolt, we’ve created a door lock that combines all of our best security features into one keyless door lock, redefining what it means to be secure. Our innovative touch screen feature provides the convenience of going keyless. No more keys to lose, hide, carry or forget. The fingerprint-resistant touch screen ensures numbers won’t be detectable to intruders after repeated use, safeguarding your home even more. Schrage’s Touch screen Deadbolt with Alarm combines our best security features into one door lock: Grade 1 certification, an Anti-pick shield, Built-in Alarm technology. The Touch screen Deadbolt is also enabled to work with Nexia Home Intelligence, a home automation system that allows you to control locks, thermostats, lights, cameras and more from wherever you and the Internet happen to be.",
            name: "Description",
          },
          { text: "Schlage Touchscreen Deadbolt", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "5044",
            name: "FrequencyName",
            type: "6341",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/748/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text: "Fix TriggerRefreshValue index for Alarm Message",
                author: "Jordan Speicher",
                date: "11 June 2020",
                revision: 5,
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
            index: "3",
            label: "Beeper",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help: "\n\t\t\t\tEnable or disable the beeper.\n\t\t\t",
            Item: [
              { label: "Disable Beeper", value: "0" },
              { label: "Enable Beeper", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Vacation Mode",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tPrevents all user codes from unlocking the deadbolt.\n\t\t\t\tEnable for extra security while you are away for\n\t\t\t\tan extended period of time.\n\t\t\t",
            Item: [
              { label: "Disable Vacation Mode", value: "0" },
              { label: "Enable Vacation Mode", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Lock & Leave",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tWhen enabled: Press the Outside Schlage Button to lock the\n\t\t\t\tdeadbolt. (Default setting).\n\t\t\t\tWhen disabled: Press the Outside Schlage Button and then enter\n\t\t\t\ta user code to lock the deadbolt.\n\t\t\t",
            Item: [
              { label: "Disable Lock & Leave", value: "0" },
              { label: "Enable Lock & Leave", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Lock Alarm Mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThe alarm is turned off by default. After installation,\n\t\t\t\tyou will need to turn on your alarm.\n\n\t\t\t\tActivity\n\t\t\t\t Alarms when the door opens or closes.\n\t\t\t\t Perfect for monitoring doors while you re at home.\n\t\t\t\t After the alarm is triggered, there is a built-in 3-second\n\t\t\t\t delay for it to reset.\n\t\t\t\t Sounds two short beeps.\n\n\t\t\t\tTamper\n\t\t\t\t Alarms when the lock is disturbed, while locked.\n\t\t\t\t Senses subtle activity at the lock.\n\t\t\t\t Sounds 15 second Alarm (90 dB)\n\n\t\t\t\tForced Entry\n\t\t\t\t Alarms when significant force pushes against the\n\t\t\t\t door, while locked. Perfect for nighttime or\n\t\t\t\t when you re away from home.\n\t\t\t\t   Least sensitive mode\n\t\t\t\t Sounds three-minute shrill, steady alarm (90 dB)\n\t\t\t",
            Item: [
              { label: "Alarm Off", value: "0" },
              { label: "Activity", value: "1" },
              { label: "Tamper", value: "2" },
              { label: "Forced Entry", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Activity Alarm Sensitivity",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of three.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough,\n\t\t\t\ttry changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert\n\t\t\t\tback to the default setting.\n\t\t\t",
            Item: [
              { label: "Most Sensitive", value: "1" },
              { label: "Medium/high Sensitivity", value: "2" },
              { label: "Medium Sensitivity", value: "3" },
              { label: "Medium/low Sensitivity", value: "4" },
              { label: "Least Sensitivity", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Tamper Alarm Sensitivity",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of three.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough,\n\t\t\t\ttry changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert\n\t\t\t\tback to the default setting.\n\t\t\t",
            Item: [
              { label: "Most Sensitive", value: "1" },
              { label: "Medium/high Sensitivity", value: "2" },
              { label: "Medium Sensitivity", value: "3" },
              { label: "Medium/low Sensitivity", value: "4" },
              { label: "Least Sensitivity", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Forced Entry Alarm Sensitivity",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of three.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough,\n\t\t\t\ttry changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert\n\t\t\t\tback to the default setting.\n\t\t\t",
            Item: [
              { label: "Most Sensitive", value: "1" },
              { label: "Medium/high Sensitivity", value: "2" },
              { label: "Medium Sensitivity", value: "3" },
              { label: "Medium/low Sensitivity", value: "4" },
              { label: "Least Sensitivity", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Disable Local Alarm Controls",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "\n\t\t\t\tEnables/Disables local alarm on/off, mode change, sensitivity changes\n\t\t\t",
            Item: [
              { label: "Disable local alarm controls", value: "0" },
              { label: "Enable local alarm controls", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Electronic transition count",
            read_only: "true",
            type: "int",
          },
          {
            genre: "config",
            index: "13",
            label: "Mechanical transition count",
            read_only: "true",
            type: "int",
          },
          {
            genre: "config",
            index: "14",
            label: "Electronic failed count",
            read_only: "true",
            type: "int",
            Help:
              "\n\t\t\t\tEach failed electronic attempt increments this count by one.\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            label: "Auto lock",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tWhen enabled, the lock will automatically relock 30 seconds\n\t\t\t\tafter unlocking. (Disabled by default.)\n\t\t\t",
            Item: [
              { label: "Disable auto lock", value: "0" },
              { label: "Enable auto lock", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "User code pin length",
            max: "8",
            min: "4",
            type: "byte",
            value: "4",
            Help:
              "\n\t\t\t\tUser Code PIN length, a value between 4 and 8. \n\t\t\t\tIMPORTANT: All user codes must be the same length.\n\t\t\t",
          },
          {
            genre: "config",
            index: "17",
            label: "Electrical High Preload Transition Count",
            read_only: "true",
            type: "int",
            Help:
              "\n\t\t\t\tA subset of Electronic transition count, the number of transitions\n\t\t\t\twith high preload.\n\t\t\t",
          },
          {
            genre: "config",
            index: "18",
            label: "Bootloader Version",
            read_only: "true",
            type: "byte",
            Help: "The version of the bootloader",
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "6",
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
    ],
  },
};

export default config;
