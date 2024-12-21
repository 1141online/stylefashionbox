function initializeTrackLib(software, softwareversion, brand, stage) {
    var preset = {
        'lib': {
            parameter: {
                software: software,
                softwareversion: softwareversion,
                brand: brand
            },
            properties: {
                lib: {stage: stage}
            }
        }
    };
    var tracker = new TrackLib(preset);
    return tracker;
}

function track(section, trackingtype, contentposition, source) {
    var parameters = {
        section: section,
        trackingtype: trackingtype,
        contentposition: contentposition,
        source: source
    };
    trackLib.track(parameters);
}
