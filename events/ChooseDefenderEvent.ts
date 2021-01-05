class IChooseDefenderEvent {
    bonus_card_id?: number
    is_bonus_card_used: boolean
    selected_row: number

    constructor(event: IChooseDefenderEvent) {
        this.bonus_card_id = event.bonus_card_id
        this.is_bonus_card_used = event.is_bonus_card_used
        this.selected_row = event.selected_row
    }

}

export default class ChooseDefenderEvent extends IChooseDefenderEvent {
    kind: "ChooseDefenderEvent" = "ChooseDefenderEvent"
}
