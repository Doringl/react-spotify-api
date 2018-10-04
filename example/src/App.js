import React, { Component } from "react";

import {
  Artist,
  Track,
  Playlist,
  User,
  SpotifyApiContext
} from "react-spotify-api";

export default class App extends Component {
  render() {
    return (
      <SpotifyApiContext.Provider value="BQAemFQ_AWl_AjoFuNcNa9UX-F86W8AI_PtML7B3JRUrX6PrbPfbiX7M6c5yvjgxG4Y_SOV859KPW8l97i7Cv1m-DMtLePvc_3S930VFngqbCvVRo1BzGaNbYENmd0RagW4uz6Dp6CLueJxzZpQP8z6UGQ9hFWUuc1ZvF0mApHCTQIbSyJmEjeDSoXmgdBI-EPDSgiW8J0yvjjk_Aicf7ZaA_HYbrdbHNBfUJeAYBAFgcfVXBOEyhPGHWlz5YXzDvg532CGpj-VPTSyleRMpCd88cIZgBTQ5ttY">
        <h1>Artist Component</h1>
        <Artist id="6eUKZXaKkcviH0Ku9w2n3V">
          {artist => {
            return artist ? (
              <ul>
                <li>{artist.name}</li>
                <ul>
                  {artist.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </ul>
            ) : null;
          }}
        </Artist>
        <h2>Artist component with multiple IDs</h2>
        <Artist id={["6eUKZXaKkcviH0Ku9w2n3V", "34gCWollNqYlcodydhFabx"]}>
          {artists =>
            artists ? (
              <ul>
                {artists.artists.map(artist => (
                  <React.Fragment key={artist.id}>
                    <li>{artist.name}</li>
                    <ul>
                      {artist.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            ) : null
          }
        </Artist>
        <h2>Artist.Albums Component</h2>
        <Artist.Albums id="6eUKZXaKkcviH0Ku9w2n3V">
          {albums =>
            albums ? (
              <ul>
                {albums.items.map(album => (
                  <li key={album.id}>{album.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Albums>
        <h2>Artist.Tracks Component</h2>
        <Artist.Tracks id="6eUKZXaKkcviH0Ku9w2n3V">
          {tracks =>
            tracks ? (
              <ul>
                {tracks.tracks.map(track => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Tracks>
        <h2>Artist.Related Component</h2>
        <Artist.Related id="6eUKZXaKkcviH0Ku9w2n3V">
          {artists =>
            artists ? (
              <ul>
                {artists.artists.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Related>
        <h1>Track Component</h1>
        <Track id="1J5ZXurCRQdFHWfOiFt12x">
          {track =>
            track ? (
              <ul>
                <li>{track.name}</li>
                <ul>
                  {track.artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                  ))}
                </ul>
              </ul>
            ) : null
          }
        </Track>
        <h2>Track component will multiple IDs</h2>
        <Track
          id={[
            "1J5ZXurCRQdFHWfOiFt12x",
            "0tGkxA0oybkQ3iR6LLXPjZ",
            "402sXCQikR6VV2x2265Jsm"
          ]}
        >
          {tracks =>
            tracks ? (
              <ul>
                {tracks.tracks.map(track => (
                  <React.Fragment key={track.id}>
                    <li>{track.name}</li>
                    <ul>
                      {track.artists.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            ) : null
          }
        </Track>
        <h2>Track.Features Component</h2>
        <Track.Features id="1J5ZXurCRQdFHWfOiFt12x">
          {features =>
            features ? (
              <ul>
                {Object.keys(features).map(feature => (
                  <li key={feature}>
                    {feature} - {features[feature]}
                  </li>
                ))}
              </ul>
            ) : null
          }
        </Track.Features>
        <h2>Track.Features for multiple IDs</h2>
        <Track.Features
          id={["1J5ZXurCRQdFHWfOiFt12x", "0tGkxA0oybkQ3iR6LLXPjZ"]}
        >
          {features =>
            features
              ? features.audio_features.map(feature => (
                  <ul key={feature.id}>
                    {Object.keys(feature)
                      .splice(0, 5)
                      .map(feat => (
                        <li key={feat}>
                          {feat} - {feature[feat]}
                        </li>
                      ))}
                  </ul>
                ))
              : null
          }
        </Track.Features>
        <h2>Track.Analysis Component</h2>
        <p>
          note: the data received is large so it might take longer for the
          response to come back than other requests to their API
        </p>
        <Track.Analysis id="1J5ZXurCRQdFHWfOiFt12x">
          {analysis =>
            analysis ? (
              <ul>
                <li>duration - {analysis.track.duration}</li>
                <li>number of sections - {analysis.sections.length}</li>
                <li>number of bars - {analysis.bars.length}</li>
                <li>beats - {analysis.beats.length}</li>
              </ul>
            ) : null
          }
        </Track.Analysis>
        <h1>Playlist Component</h1>
        <Playlist
          id="060QHhmOlYMEfFdxl4NpAS"
          options={{ fields: "name,owner,followers" }}
        >
          {playlist =>
            playlist ? (
              <ul>
                <li>{playlist.name}</li>
                <ul>
                  <li>Owner - {playlist.owner.display_name}</li>
                  <li>{playlist.followers.total} followers</li>
                </ul>
              </ul>
            ) : null
          }
        </Playlist>
        <h2>Playlist.Tracks Component</h2>
        <Playlist.Tracks id="060QHhmOlYMEfFdxl4NpAS" options={{ limit: 10 }}>
          {tracks =>
            tracks ? (
              <ul>
                {tracks.items.map(track => (
                  <li key={track.track.id}>{track.track.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Playlist.Tracks>
        <h2>Playlist.Images Component</h2>
        <Playlist.Images id="060QHhmOlYMEfFdxl4NpAS">
          {images =>
            images && images.length > 0 ? (
              <img src={images[images.length - 1].url} alt="Playlist" /> // last image is smallest one
            ) : null
          }
        </Playlist.Images>
        <h1>User Component</h1>
        <p>
          using the User component with no 'id' prop will return data for the
          user that belongs to the access_token received in the context provider
        </p>
        <User>
          {user =>
            user ? (
              <ul>
                <li>Name - {user.display_name}</li>
                <li>ID - {user.id}</li>
              </ul>
            ) : null
          }
        </User>
        <hr />
        <User id="spotify">
          {user =>
            user ? (
              <ul>
                <li>Name - {user.display_name}</li>
                <li>ID - {user.id}</li>
              </ul>
            ) : null
          }
        </User>
        <h2>User.Playlists Component</h2>
        <p>
          using the User.Playlists component with no 'id' prop will return data
          for the user that belongs to the access_token received in the context
          provider
        </p>
        <User.Playlists options={{ limit: 3 }}>
          {playlists =>
            playlists ? (
              <ul>
                {playlists.items.map(playlist => (
                  <li key={playlist.id}>{playlist.name}</li>
                ))}
              </ul>
            ) : null
          }
        </User.Playlists>
        <hr />
        <User.Playlists id="spotify" options={{ limit: 3 }}>
          {playlists =>
            playlists ? (
              <ul>
                {playlists.items.map(playlist => (
                  <li key={playlist.id}>{playlist.name}</li>
                ))}
              </ul>
            ) : null
          }
        </User.Playlists>
      </SpotifyApiContext.Provider>
    );
  }
}