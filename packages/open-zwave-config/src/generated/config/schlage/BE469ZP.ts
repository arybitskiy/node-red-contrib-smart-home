import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/003B:0469:0001",
            name: "OzwInfoPage",
          },
          { text: "images/schlage/BE469ZP.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3130/",
            id: "0469",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "One-button Remove lock from Z-Wave Network (Exclusion) \n\n1.\tPlace your home automation system or panel into the “Remove” or Exclusion Mode (Refer to the respective documentation for that specific home automation system or panel device for details). \n2.\tRemove the battery cover of the deadbolt. \n3.\tPress then release the button on the PCB. \n4.\tAn LED will flash amber indicating the “Remove” or Exclusion process is in progress. \n5.\tWhen a green LED flashes 3 times, the “Remove” or Exclusion process is completed successfully. \n6.\tIf a red LED turns ON, try repeating steps 1-3 \n\nInteractive Instruction for Remove  https://instructions.allegion.com/instr/86/2581",
            name: "ExclusionDescription",
          },
          { text: "BE469ZP", id: "0469", name: "Identifier", type: "0001" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0469",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "The Schlage Connect™ Smart Deadbolt combines advanced features and compatibility with your home automation or security system, allowing you to control your lock from anywhere and freeing you from the hassles of lost keys, getting locked out, or hiding a spare for friends and family.\n\nThe lock comes preprogrammed with two access codes and can hold up to 30 unique codes for family members and trusted friends. The fingerprint-resistant touchscreen helps access codes stay private, minimizing tell-tale wear that can tip off possible intruders.\n\nThe Schlage Connect Smart Deadbolt is battery-powered with a low battery warning that gives you weeks of advanced notice before it runs out. With guaranteed fit on standard doors, it’s easy for homeowners to install in minutes with just a screwdriver. The touchscreen continues to work in the event of a power outage, so you don’t have to worry about getting locked out – plus, a back-up key is included with the lock for peace of mind.\n\nThe Schlage Connect Smart Deadbolt incorporates Z-Wave Plus S2 technology, an enhanced security protocol that features an additional layer of AES encryption of wireless signals. The Z-Wave technology allows you to integrate your exterior door locks with other Z-Wave smart home devices, such as cameras, motion detectors, lights and thermostats, bringing the safety, simplicity and style of Schlage to your smart home.",
            name: "Description",
          },
          { text: "Schlage Connect Smart Deadbolt", name: "Name" },
          {
            text:
              "One-button Add lock to Z-Wave Network (Inclusion) \n\n1.\tPlace your home automation system or panel into the “Add” or Inclusion Mode (Refer to the respective documentation for that specific home automation system or panel device for details). \n2.\tRemove the battery cover of the deadbolt. \n3.\tPress then release the button on the PCB.\n4.\tAn LED will flash amber indicating the “Add” or Inclusion process is in progress. \n•\tIf the Security Scheme is Security 2 (S2), verify the DSK of the lock at the Z-Wave Controller. The PIN Code portion of the Z-Wave DSK will be needed.\n5.\tWhen a green LED turns ON, the “Add” or Inclusion has completed successfully. \n6.\tIf a red LED turns ON, try repeating steps 1-3 \n \nInteractive Instruction for Add  \nhttps://instructions.allegion.com/instr/86/2543",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3130/Connect_QSG_Add_Remove_FDR_Association.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Steps for One-button Factory Default Reset \n\n1.\tRemove the battery cover of the deadbolt\n2.\tPress and hold the button on the PCB for 7 (seven) seconds. \nWhile holding the button pressed, after 1 sec LED will be lit for 2 sec. and turn OFF; continue to press and hold the button until the LED will be lit again and release the button.\n3.\tThe LED will blink red three times and the green check on the touchscreen will blink if the Factory Default Reset is successful. \n4.\tTo check that the lock was reset, press the Schlage Button and enter one of the Default User Codes. If the reset was successful, the Default User Codes will unlock the deadbolt. \nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3130/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            index: "3",
            label: "Beeper",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help: "\n\t\t\t\tEnable or disable the keypad beeper.\n\t\t\t",
            Item: [
              { label: "Enable", value: "255" },
              { label: "Disable", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Vacation Mode",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tEnable or disable vacation mode.\n\t\t\t\tDisables all user codes, preventing all codes from unlocking the deadbolt.\n\t\t\t\tEnable for extra security while you are away for an extended period of time.\n\t\t\t",
            Item: [
              { label: "Enable", value: "255" },
              { label: "Disable", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Lock and Leave Mode",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tEnable or disable Lock and Leave Mode. \n\t\t\t\tWhen enabled: Press the Schlage button on the keypad to lock the deadbolt (Default setting).\n\t\t\t\tWhen disabled: Press the Schlage button on the keypad and then enter a user code to lock the deadbolt.\n\t\t\t",
            Item: [
              { label: "Enable", value: "255" },
              { label: "Disable", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Lock Alarm Mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tBy default the alarm is turned off by default. After intalling, you can turn the alarm on.\n\t\t\t\t\n\t\t\t\tAlert\n\t\t\t\t Alarms when the door opens or closes.\n\t\t\t\t Perfect for monitoring the door while you are home.\n\t\t\t\t After the alarm is triggered, there is a built-in 3-second delay for it to reset.\n\t\t\t\t sounds two short beeps.\n\t\t\t\t \n\t\t\t\tTamper\n\t\t\t\t Alarms when the lock is disturbed while locked.\n\t\t\t\t Senses subtle activity at the lock.\n\t\t\t\t Sounds 15 second alarm (90 dB).\n\t\t\t\t \n\t\t\t\tForced Entry\n\t\t\t\t Alarms when significant force pushes against the door while locked.\n\t\t\t\t Perfect for nighttime or when you are away from home.\n\t\t\t\t Least sensitive mode. Sounds 3-minute shrill, steady alarm (90dB).\n\t\t\t",
            Item: [
              { label: "Alarm Off", value: "0" },
              { label: "Alert", value: "1" },
              { label: "Tamper", value: "2" },
              { label: "Forced Entry", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Alarm Alert Sensitivity",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of 3.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough, try changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert back to the default setting.\n\t\t\t",
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
            label: "Alarm Tamper Sensitivity",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of 3.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough, try changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert back to the default setting.\n\t\t\t",
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
            label: "Alarm Forced Entry Sensitivity",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "\n\t\t\t\tEach alarm mode is preset to a sensitivity level of 3.\n\t\t\t\tIf your alarm is sounding too frequently, or not frequently enough, try changing this setting.\n\t\t\t\tIf you change the alarm mode, the sensitivity will revert back to the default setting.\n\t\t\t",
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
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tThis configuration setting controls the ability to ENABLE or DISABLE local control of the built-in alarm function.\n\t\t\t",
            Item: [
              { label: "Enable local alarm controls", value: "255" },
              { label: "Disable local alarm controls", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Electronic transition count",
            read_only: "true",
            size: "4",
            type: "int",
            Help:
              "\n\t\t\t\tIndicates the number of transitions from locked to unlocked or unlocked to locked state via electronic activation.\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            label: "Mechanical transition count",
            read_only: "true",
            size: "4",
            type: "int",
            Help:
              "\n\t\t\t\tIndicates the number of transitions from locked to unlocked or unlocked to locked state via mechanical activation.\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            label: "Electronic failed count",
            read_only: "true",
            size: "4",
            type: "int",
            Help:
              "\n\t\t\t\tIndicates the number of failed electronic activation attempts for this lock.\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            label: "Auto Lock",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tWhen enabled, the lock will automatically relock 30 seconds after unlocking. (Disabled by default.)\n\t\t\t",
            Item: [
              { label: "Enable", value: "255" },
              { label: "Disable", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "User code legnth ",
            max: "8",
            min: "4",
            size: "1",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "\n\t\t\t\tChoose user code length between 4 and 8 digits.\n\t\t\t\tIMPORTANT: All user codes must be the same length.\n\t\t\t",
          },
          {
            genre: "config",
            index: "17",
            label: "Electrical High Preload Transition Count",
            read_only: "true",
            size: "4",
            type: "int",
            Help:
              "\n\t\t\t\tIndicates the number of transitions from locked to unlocked or unlocked to locked state via electronic activation that indicated a high preload on the deadbolt.\n\t\t\t\tThis is a subset of Electronic transition count.\n\t\t\t\tHigh preload occurs when the bolt is obstructed and the motor needs to use more power to throw the bolt.\n\t\t\t\tAdjust door and strike plate to ensure the bolt can move freely. This will save battery power. \n\t\t\t",
          },
          {
            genre: "config",
            index: "18",
            label: "Bootloader Version",
            read_only: "true",
            size: "1",
            type: "byte",
            Help: "The version of the bootloader in the lock.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "2" }],
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
    ],
  },
};

export default config;
