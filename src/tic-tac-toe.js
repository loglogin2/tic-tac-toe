class TicTacToe {
    constructor() {

        this.playingField = [
                            [ null , null , null ],
                            [ null , null , null ],
                            [ null , null , null ]
        ];
        this.currentPlayer = 'x';

    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {

        if ( this.playingField[rowIndex][columnIndex] == null )
        {
            this.playingField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

            if( this.getCurrentPlayerSymbol() == 'x')
            {
                this.currentPlayer = 'o';
            }
            else
            {
                this.currentPlayer = 'x';
            }
        }

    }

    isFinished() {

        if ( this.isDraw() || this.getWinner() != null )
        {
            return true;
        }
        return false;
    }

    getWinner() {

        for( var i = 0 ; i < 3 ; i ++ )
        {
                if (this.playingField[i][0] == this.playingField[i][1] && this.playingField[i][0] == this.playingField[i][2] && this.playingField[i][0] != null)
                {
                    return this.getFieldValue(i, 0);
                }
        }

        for( var i = 0 ; i < 3 ; i ++ )
        {
            if( this.playingField[0][i] == this.playingField[1][i] && this.playingField[0][i] == this.playingField[2][i] && this.playingField[0][i] != null)
            {
                return this.getFieldValue(0, i);
            }
        }

        if( this.playingField[0][0] == this.playingField[1][1] && this.playingField[0][0] == this.playingField[2][2] && this.playingField[0][0] != null)
        {
            return this.getFieldValue(0,0);
        }
        if( this.playingField[2][0] == this.playingField[1][1] && this.playingField[2][0] == this.playingField[0][2] && this.playingField[2][0] != null)
        {
            return this.getFieldValue(2,0);
        }

        return null;

    }

    noMoreTurns() {

        var isNull = false;

        for ( var i = 0 ; i < 3 ; i++ )
        {
            for ( var j = 0 ; j < 3 ; j ++ )
            {
               if( this.playingField[i][j] == null )
               {
                   isNull = true;
               }
            }
        }

        return !isNull;
    }

    isDraw() {

        if ( this.getWinner() == null && this.noMoreTurns() )
        {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {

        return this.playingField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
